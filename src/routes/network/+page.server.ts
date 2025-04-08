import type { PageServerLoad } from './$types';
import { getRouters } from '$lib/server/traefik';

let cache = {
	timestamp: 0,
	data: null
};

export const load: PageServerLoad = async () => {
	const now = Date.now();

	if (cache.data && now - cache.timestamp < 10000) {
		console.log('Serving from cache');
		return {
			routers: cache.data
		};
	}

	const routers = await getRouters();

	cache = { timestamp: now, data: routers };

	return {
		routers
	};
};
