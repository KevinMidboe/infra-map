import { prerender } from '$app/server';

export const allRoutes = prerender(() => {
	const modules = import.meta.glob('/src/routes/**/+page.svelte');
	const routes = Object.keys(modules).map((path) => {
		console.log(path);
		// Remove '/src/routes' prefix and '+page.svelte' suffix
		let route = path.replace('/src/routes', '').replace('/+page.svelte', '');
		// Handle the root route

		route = route.toString().split('/')[1];
		return route;
	});

	const allRoute = [...new Set(routes)].map((r: string) => {
		return {
			name: r?.length > 1 ? r[0].toUpperCase() + r.slice(1, r.length) : r,
			path: '/' + r
		};
	});

	return [{name: 'Home', path: '/'}, ...allRoute].filter(r => r.name);
});
