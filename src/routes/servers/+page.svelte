<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ServerComp from '$lib/components/Server.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { cluster, nodes } = data;
</script>

<PageHeader>Servers</PageHeader>

<div class="server-list">
	{#each nodes as node (node.name)}
		<div>
			<ServerComp {node} />
		</div>
	{/each}
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
