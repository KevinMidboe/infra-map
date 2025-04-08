import { env } from '$env/dynamic/private';
import type { Entity } from '$lib/interfaces/homeassistant';

function buildHomeassistantRequest() {
	const url = env.HOMEASSISTANT_URL || '';
	const token = env.HOMEASSISTANT_TOKEN || '';

	const options = {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		}
	};

	return { url, options };
}

async function fetchHassStates() {
	const { url, options } = buildHomeassistantRequest();
	return fetch(url, options).then((resp) => resp.json());
}

export async function fetchP1P(): Promise<Entity[]> {
	try {
		let hassStates = await fetchHassStates();

		hassStates = hassStates.filter(
			(el: Entity) => el.attributes.friendly_name?.includes('P1P') === true
		);
		return hassStates;
	} catch (error) {
		console.log('ERROR! from fetchP1P:', error);
		return Promise.reject(null);
	}
}
