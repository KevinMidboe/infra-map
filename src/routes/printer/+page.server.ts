import type { PageServerLoad } from './$types';
import { fetchP1P } from '$lib/server/homeassistant';
import { getAllFilament } from '$lib/server/database';
import type { Filament } from '$lib/interfaces/printer';

interface PrinterState {
	[key: string]: {
		value: string;
		unit?: string;
		picture?: string;
	};
}

export const load: PageServerLoad = async (): Promise<{
	p1p: PrinterState;
	filament: Filament[];
}> => {
	let p1p;
	let filament: Filament[];

	try {
		p1p = await fetchP1P();
		filament = await getAllFilament();
	} catch (error) {
		console.error('error while fetching printer server props');
		console.error(error);
	}

	return { p1p, filament };
};
