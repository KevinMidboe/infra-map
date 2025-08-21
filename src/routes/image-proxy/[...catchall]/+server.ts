import type { RequestHandler } from './$types';

async function fetchImage(src: string) {
	// const url = new URL(src);
	const remoteUrl = String(src.match(/http:\/\/[a-z0-9\\.]+:8123\/.*/));
	const url = new URL(remoteUrl);

	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'image/jpeg'
		}
	};

	if (url === null) {
		console.log('url is not valid');
		return null;
	}

	return fetch(url.href, options)
		.then((resp) => resp.blob())
		.catch(() => null);
}

export const GET: RequestHandler = async ({ url }) => {
	url.pathname = url.pathname.replace('/image/', '');

	const res = await fetchImage(url.href);

	// something went wrong
	if (res === null) {
		return new Response(null, { status: 204 });
	}

	return new Response(res);
};
