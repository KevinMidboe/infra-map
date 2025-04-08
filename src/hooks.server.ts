import type { Handle } from '@sveltejs/kit';
import { dev } from '$app/environment';

export const handle: Handle = async ({ event, resolve }) => {
	if (dev) {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
	} else {
		process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
	}

	return await resolve(event);
};
