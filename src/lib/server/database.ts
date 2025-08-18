import { currentFilament } from './filament';
import pg from 'pg';
import { env } from '$env/dynamic/private';
import type { Filament } from '$lib/interfaces/printer';

const { Pool } = pg;

let pool: InstanceType<typeof Pool> | undefined;

async function initDb() {
	if (pool) return pool;

	pool = new Pool({
		connectionString: env.DATABASE_URL // e.g. postgres://user:pass@localhost:5432/mydb
	});

	const client = await pool.connect();
	try {
		await client.query('BEGIN');

		for (const stmt of schemas) {
			await client.query(stmt);
		}

		await client.query('COMMIT');
	} catch (err: any) {
		console.error('Failed to create tables:', err.message);
		await client.query('ROLLBACK');
		throw err;
	} finally {
		client.release();
	}

	return pool;
}

const schemas = [
	`
	CREATE TABLE IF NOT EXISTS filament (
		id SERIAL PRIMARY KEY,
		hex TEXT NOT NULL,
		color TEXT NOT NULL,
		material TEXT,
		weight REAL,
		link TEXT,
		added INTEGER, -- epoch seconds
		updated INTEGER, -- epoch seconds
		UNIQUE (hex, updated)
	)
	`
];

async function seedData(pool: InstanceType<typeof Pool>) {
	const baseTimestamp = Math.floor(new Date('2025-04-01T05:47:01+00:00').getTime() / 1000);
	const filaments = currentFilament();

	const client = await pool.connect();
	try {
		await client.query('BEGIN');

		for (const f of filaments) {
			await client.query(
				`INSERT INTO filament (hex, color, material, weight, link, added, updated)
				 VALUES ($1, $2, $3, $4, $5, $6, $7)
				 ON CONFLICT (hex, updated) DO NOTHING`,
				[f.hex, f.color, f.material, f.weight, f.link, baseTimestamp, baseTimestamp]
			);
		}

		await client.query('COMMIT');
	} catch (err: any) {
		console.error('Failed to seed data:', err.message);
		await client.query('ROLLBACK');
		throw err;
	} finally {
		client.release();
	}
}

// Export helper to use db elsewhere
async function getDb() {
	if (pool) return pool;

	const p = await initDb();
	await seedData(p);
	console.log('Database setup and seeding complete!');
	return p;
}

export async function getAllFilament(): Promise<Array<Filament>> {
	const pool = await getDb();
	const result = await pool.query('SELECT * FROM filament');
	return result.rows || [];
}

export async function getFilamentByColor(name: string) {
	const pool = await getDb();
	const result = await pool.query('SELECT * FROM filament WHERE LOWER(color) = LOWER($1) LIMIT 1', [
		name
	]);
	return result.rows[0] || undefined;
}

export async function addFilament(
	hex: string,
	color: string,
	material: string,
	weight: number,
	link: string
) {
	const timestamp = Math.floor(new Date().getTime() / 1000);

	const pool = await getDb();
	const result = await pool.query(
		`INSERT INTO filament (hex, color, material, weight, link, added, updated)
		 VALUES ($1, $2, $3, $4, $5, $6, $7)
		 RETURNING id`,
		[hex, color, material, weight, link, timestamp, timestamp]
	);
	return { id: result.rows[0].id };
}

export async function updateFilament({
	id,
	hex,
	color,
	material,
	weight,
	link
}: {
	id: number;
	hex?: string;
	color?: string;
	material?: string;
	weight?: number;
	link?: string;
}) {
	const pool = await getDb();

	// Dynamically build query based on provided fields
	const fields = [];
	const values = [];
	let i = 1;

	if (hex !== undefined) {
		fields.push(`hex = $${i++}`);
		values.push(hex);
	}
	if (color !== undefined) {
		fields.push(`color = $${i++}`);
		values.push(color);
	}
	if (material !== undefined) {
		fields.push(`material = $${i++}`);
		values.push(material);
	}
	if (weight !== undefined) {
		fields.push(`weight = $${i++}`);
		values.push(weight);
	}
	if (link !== undefined) {
		fields.push(`link = $${i++}`);
		values.push(link);
	}

	if (fields.length === 0) return; // nothing to update

	values.push(id);
	const query = `UPDATE filament SET ${fields.join(', ')}, updated = EXTRACT(EPOCH FROM NOW())::INT WHERE id = $${i}`;
	await pool.query(query, values);
}
