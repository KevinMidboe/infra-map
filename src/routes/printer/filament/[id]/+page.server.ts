import type { PageServerLoad } from './$types';
import { getFilamentByColor } from '$lib/server/database';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	let { id } = params;
	if (id) {
		id = id.replaceAll('-', ' ');
	}

	const filament = await getFilamentByColor(id);
	console.log('fil:', filament);
	return { id, filament: filament };
};
