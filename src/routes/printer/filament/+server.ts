import { addFilament, updateFilament } from '$lib/server/database';
import { json } from '@sveltejs/kit';

export const PUT: RequestHandler = async ({ params, request }) => {
	try {
		const id = Number(params.id);
		if (isNaN(id)) {
			return new Response(JSON.stringify({ error: 'Invalid id' }), { status: 400 });
		}

		const body = await request.json();

		await updateFilament({ id, ...body });

		return json({ success: true });
	} catch (err: any) {
		console.log(err);
		console.error('Failed to update filament:', err.message);
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500
		});
	}
};

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();

		// Extract values by input `name` attributes
		const hex = formData.get('Hex')?.toString().trim();
		const color = formData.get('Color name')?.toString().trim();
		const material = formData.get('Material')?.toString().trim();
		const weightStr = formData.get('Weight')?.toString().trim();
		const link = formData.get('Link')?.toString().trim();

		if (!hex || !color || !material || !weightStr || !link) {
			return new Response(JSON.stringify({ error: 'All fields are required' }), { status: 400 });
		}

		// convert "0.5 kg" → 0.5, "1 kg" → 1, etc
		const weight = parseFloat(weightStr);

		if (!hex || !color) {
			return new Response(JSON.stringify({ error: 'hex and color are required' }), {
				status: 400
			});
		}

		await addFilament(hex, color, material, weight, link);

		return Response.redirect(`${request.url}/${color}`, 303);
	} catch (err: any) {
		console.log(err);
		console.error('Failed to add filament:', err.message);
		return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
			status: 500
		});
	}
};
