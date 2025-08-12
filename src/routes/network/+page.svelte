<script lang="ts">
	import { goto } from '$app/navigation';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Table from '$lib/components/Table.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { routers } = data;
	const providers = [
		...new Set(
			routers.map((item) => item.provider).filter((provider) => typeof provider === 'string')
		)
	];
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

	<Table
		title="Routers"
		description="Traefik routers available"
		columns={['Entrypoints', 'Name', 'Provider', 'Rule', 'Service', 'Status']}
	>
		<tbody slot="tbody">
			{#each routers as route (route)}
				<tr on:click={() => goto(`/network/${route.service}`)} class="link">
					<td>{route.entryPoints}</td>
					<td>{route.name}</td>
					<td>{route.provider}</td>
					<td>{route.rule}</td>
					<td>{route.service}</td>
					<td>{route.status}</td>
				</tr>
			{/each}
		</tbody>
	</Table>
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
