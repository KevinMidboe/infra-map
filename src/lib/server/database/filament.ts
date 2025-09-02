import type { Filament } from '$lib/interfaces/printer';
import { getDb } from '../database';

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
