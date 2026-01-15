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
	`,
	`
	CREATE TABLE IF NOT EXISTS site (
		id SERIAL PRIMARY KEY,
		name TEXT NOT NULL,
		color TEXT NOT NULL,
		image TEXT,
		link TEXT,
		background TEXT,
		created INTEGER, -- epoch seconds
		updated INTEGER, -- epoch seconds
		UNIQUE (name, updated)
	)
	`
];

async function seedFilament(pool: InstanceType<typeof Pool>) {
	const baseTimestamp = Math.floor(new Date('2025-04-01T05:47:01+00:00').getTime() / 1000);
	const filaments: Filament[] = []; // disables seed

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
export async function getDb() {
	if (pool) return pool;

	const p = await initDb();
	await seedFilament(p);
	console.log('Database setup and seeding complete!');
	return p;
}
