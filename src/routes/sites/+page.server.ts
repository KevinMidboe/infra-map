import { allSites, addSite } from '$lib/server/database/sites';
import type { Site } from '$lib/interfaces/site';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async (): Promise<{ sites: Array<Site> }> => {
	let sites: Site[] = [];

	try {
		sites = await allSites();
		console.log('got sites:', sites);
	} catch (error) {
		console.error('error while fetching sites server props, likely db issue');
		console.error(error);
	}

	return { sites };
};

export const actions = {
	default: async ({ request }) => {
		try {
			const formData = await request.formData();

			// Extract values by input `name` attributes
			const name = formData.get('Name')?.toString().trim();
			const link = formData.get('Link')?.toString().trim();
			const image = formData.get('Image')?.toString().trim();
			const color = formData.get('Color')?.toString().trim();
			const background = formData.get('Background')?.toString().trim();

			if (!name || !link || !image || !color || !background) {
				return { error: 'All fields are required!', success: false, statusCode: 400 };
			}

			if (!name || !link) {
				return { error: 'name & link are required', success: false, statusCode: 400 };
			}

			const site: Site = { name, link, image, color, background };
			await addSite(site);

			return { success: true };
		} catch (err: unknown) {
			console.log(err);
			console.error('Failed to add site:', err.message);
			return { error: 'internal server error', success: false, statusCode: 500 };
		}
	}
} satisfies Actions;
