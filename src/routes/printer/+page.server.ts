import type { PageServerLoad } from './$types';
import { fetchP1P } from '$lib/server/homeassistant';
import { currentFilament } from '$lib/server/filament';
import type { Entity } from '$lib/interfaces/homeassistant';
import type { Filament } from '$lib/interfaces/printer';

export const load: PageServerLoad = async (): Promise<{ p1p: Entity[]; filament: Filament[] }> => {
	const p1p = await fetchP1P();
	const filament = currentFilament();
	return { p1p, filament };
};
