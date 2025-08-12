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

const attributes = {
	current_stage: null,
	print_status: null,
	bed_temperature: null,
	nozzle_temperature: null,
	total_usage: null,
	nozzle_type: null,
	nozzle_size: null,
	print_bed_type: null,
	current_layer: null,
	total_layer_count: null,
	print_progress: null,
	print_length: null,
	print_weight: null,
	sd_card_status: null,
	speed_profile: null,
	wi_fi_signal: null,
	end_time: null,
	cover_image: null,
	pick_image: null,
	camera: null
};

interface PrinterState {
	[key: string]: {
		value: string;
		unit?: string;
		picture?: string;
	};
}

function printerState(data: object) {
	const state: PrinterState = {};

	const keys = Object.keys(attributes);
	for (let i = 0; i < keys.length; i++) {
		const k = keys[i];
		const value = data?.filter((el) => el.entity_id.includes(k))[0];

		if (!value) continue;
		state[k] = { value: value.state };

		if (value?.attributes?.unit_of_measurement)
			state[k]['unit'] = value.attributes.unit_of_measurement;

		if (value?.attributes?.entity_picture) state[k]['picture'] = value.attributes.entity_picture;
	}

	return state;
}

async function fetchHassStates() {
	const { url, options } = buildHomeassistantRequest();
	return fetch(url, options).then((resp) => resp.json());
}

export async function fetchP1P(): Promise<PrinterState> {
	try {
		let hassStates = await fetchHassStates();

		hassStates = hassStates.filter(
			(el: Entity) => el.attributes.friendly_name?.includes('P1P') === true
		);
		return printerState(hassStates);
	} catch (error) {
		console.log('ERROR! from fetchP1P:', error);
		return Promise.reject(null);
	}
}
