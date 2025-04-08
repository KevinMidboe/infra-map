<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Table from '$lib/components/Table.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { routers } = data;
	const columns = {
		entryPoints: 'Entrypoints',
		name: 'Name',
		provider: 'Provider',
		rule: 'Rule',
		service: 'Service',
		status: 'Status'
	};
	const links: string[] = routers.map((router) => `/network/${router.service}`);

	const providers = [
		...new Set(
			routers.map((item) => item.provider).filter((provider) => typeof provider === 'string')
		)
	];
	console.log(routers);
</script>

<PageHeader>Network</PageHeader>

<div class="section-wrapper">
	<Section title="Traefik" description="Treafik is a network proxy and webserver.">
		<div class="section-row">
			<div class="section-element">
				<label>Number of routers</label>
				<span>{routers.length}</span>
			</div>

			<div class="section-element">
				<label>Providers</label>
				<span>{providers?.join(', ')}</span>
			</div>
		</div>
	</Section>

	<Table title="Routers" description="Traefik routers available" {columns} data={routers} {links} />
</div>

<style lang="scss">
	.server-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: left;
		gap: 2rem;
	}
</style>
