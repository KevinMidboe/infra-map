import { currentFilament } from './filament';

import { open } from 'sqlite';
import sqlite3 from 'sqlite3';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import type { Filament } from '$lib/interfaces/printer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbPath = resolve(__dirname, '../../../db.sqlite');

let db;

async function initDb() {
	const db = await open({
		filename: dbPath,
		driver: sqlite3.Database
	});

	// Transaction to run schemas
	await db.exec('BEGIN TRANSACTION');
	try {
		for (const stmt of schemas) {
			await db.run(stmt);
		}
		await db.exec('COMMIT');
	} catch (err) {
		console.error('Failed to create tables:', err.message);
		await db.exec('ROLLBACK');
	}

	return db;
}

const schemas = [
	`
	CREATE TABLE IF NOT EXISTS filament (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		hex TEXT NOT NULL,
		color TEXT NOT NULL,
		material TEXT,
		weight REAL,
		link TEXT,
		added INTEGER, -- epoch seconds
		updated INTEGER -- epoch seconds
	)
	`
];

async function seedData(db) {
	const baseTimestamp = Math.floor(new Date('2025-04-01T05:47:01+00:00').getTime() / 1000);
	const filaments = currentFilament();

	const stmt = await db.prepare(`
        INSERT OR IGNORE INTO filament (hex, color, material, weight, link, added, updated)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

	await db.exec('BEGIN TRANSACTION');
	try {
		for (const f of filaments) {
			const existing = await db.get('SELECT 1 FROM filament WHERE hex = ? AND updated = ?', [
				f.hex,
				baseTimestamp
			]);

			if (!existing) {
				await db.run(
					`INSERT INTO filament (hex, color, material, weight, link, added, updated)
					VALUES (?, ?, ?, ?, ?, ?, ?)`,
					[f.hex, f.color, f.material, f.weight, f.link, baseTimestamp, baseTimestamp]
				);
			}
		}

		await db.exec('COMMIT');
	} catch (err) {
		console.error('Failed to seed data:', err.message);
		await db.exec('ROLLBACK');
	} finally {
		await stmt.finalize();
	}
}

// Export helper to use db elsewhere
async function getDb() {
	if (db !== undefined) return db;

	db = await initDb();
	await seedData(db);
	console.log('Database setup and seeding complete!');
}

export async function getAllFilament(): Promise<Array<Filament>> {
	const db = await getDb();
	const result = await db?.all('SELECT * FROM filament');
	return result || [];
}

export async function getFilamentByColor(name: string) {
	const db = await getDb();
	const result = await db?.get('SELECT * FROM filament WHERE LOWER(color) = ?', [name]);
	return result || undefined;
}

export async function addFilament(
	hex: string,
	color: string,
	material: string,
	weight: number,
	link: string
) {
	const timestamp = Math.floor(new Date().getTime() / 1000);

	const db = await getDb();
	const result = await db.run(
		`INSERT INTO filament (hex, color, material, weight, link, added, updated)
					VALUES (?, ?, ?, ?, ?, ?, ?)`,
		[hex, color, material, weight, link, timestamp, timestamp]
	);
	return { id: result.lastID };
}

export async function updatefilament({ id, make, model, year }) {
	const db = await getDb();
	await db.run(
		'UPDATE filaments SET make = ?, model = ?, year = ? WHERE id = ?',
		make,
		model,
		year,
		id
	);
}
