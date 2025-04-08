import type { PageServerLoad } from './$types';
import { filamentByColor } from '$lib/server/filament';

export const load: PageServerLoad = async ({ params }) => {
	let { id } = params;
	if (id) {
		id = id.replaceAll('-', ' ');
	}

	const filament = filamentByColor(id);
	return { id, filament };
};
