import { getDb } from '../database';
import type { Site } from '$lib/interfaces/site';

export async function allSites(): Promise<Array<Site>> {
	const pool = await getDb();
	const query = 'SELECT * FROM site';
	const result = await pool.query(query);
	return result.rows || [];
}

export async function addSite(site: Site) {
	const timestamp = Math.floor(new Date().getTime() / 1000);
	const query = `INSERT INTO site (name, link, image, color, background, updated)
		 VALUES ($1, $2, $3, $4, $5, $6)
		 RETURNING id`;
	const { name, link, image, color, background } = site;

	const pool = await getDb();
	const result = await pool.query(query, [name, link, image, color, background, timestamp]);
	return { id: result.rows[0].id };
}
