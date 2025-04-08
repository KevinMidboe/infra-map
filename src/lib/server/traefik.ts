import { env } from '$env/dynamic/private';

const TRAEFIK_HTTP_URL = '/api/http';

function buildTraefikRequest(path: string) {
	const baseURL = env.TRAEFIK_URL || 'http://localhost:9000';
	const url = `${baseURL}${TRAEFIK_HTTP_URL}/${path}`;
	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	};

	return { url, options };
}

export async function getRouters() {
	const { url, options } = buildTraefikRequest('routers');

	return fetch(url, options).then((resp) => resp.json());
}
