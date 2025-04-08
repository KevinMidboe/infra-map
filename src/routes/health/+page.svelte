<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Table from '$lib/components/Table.svelte';

	let columns = ['Domain', 'Status'];
	let data = [
		{ Domain: 'laravel-ucm1d.kinsta.app', Status: 'Live' },
		{ Domain: 'laravel-ucm1d.kinsta.app', Status: 'Live' },
		{ Domain: 'laravel-ucm1d.kinsta.app', Status: 'Live' }
	];
</script>

<PageHeader>Health</PageHeader>

<Table
	title="Domains list"
	description="All of the verified domains below point to this application and are covered by free Cloudflare SSL certificates for a secure HTTPS connection. The DNS records for the domains must be set up correctly for them to work."
	{columns}
	{data}
/>
