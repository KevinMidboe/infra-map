import type { PageServerLoad } from './$types';
import { getRouters } from '$lib/server/traefik';

const cache = {
	timestamp: 0,
	data: {}
};

export const load: PageServerLoad = async ({ params }) => {
	const now = Date.now();
	const { id } = params;

	if (cache.data[id] && now - cache.timestamp < 10000) {
		console.log('Serving from cache');
		return {
			router: cache.data[id]
		};
	}

	const routers = await getRouters();
	const router = routers.find((router) => router.service === id);

	cache.time = now;
	cache.data[id] = router;

	return {
		router
	};
};
