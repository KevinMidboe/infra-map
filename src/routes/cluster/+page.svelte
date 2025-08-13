<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import Deploy from '$lib/components/Deploy.svelte';
	import Daemon from '$lib/components/Daemon.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Input from '$lib/components/Input.svelte';
	import type { PageData } from './$types';
	import type { V1DaemonSet, V1Deployment, V1Node } from '@kubernetes/client-node';

	let { data }: { data: PageData } = $props();
	let filterValue = $state('');

	const rawDeployments: V1Deployment[] = data?.deployments;
	const rawDaemons: V1DaemonSet[] = data?.daemons;
	const rawNodes: V1Node[] = data?.nodes;

	let deployments = $derived(rawDeployments.filter((d) => d.metadata.name.includes(filterValue)));
	let daemons = $derived(rawDaemons.filter((d) => d.metadata.name.includes(filterValue)));
	let nodes = $derived(rawNodes.filter((n) => n.metadata.name.includes(filterValue)));
</script>

<PageHeader>Cluster overview</PageHeader>

<div class="search-section">
	<Input label="Filter resources" placeholder="Search by name" bind:value={filterValue} />
</div>

<details open>
	<summary>
		<h2>Cluster <span>{nodes.length} nodes</span></h2>
	</summary>
	<div class="server-list">
		{#each nodes as node (node)}
			<Node {node} />
		{/each}
	</div>
</details>

<details open>
	<summary>
		<h2>
			Daemons <span
				>{daemons.length} daemons ({daemons.reduce(
					(total, item) => total + (item.pods ? item.pods.length : 0),
					0
				)} pods)</span
			>
		</h2>
	</summary>

	<div class="server-list deploys">
		{#each daemons as daemon (daemon)}
			<Daemon {daemon} />
		{/each}
	</div>
</details>

<details open>
	<summary>
		<h2>
			Pods <span
				>{deployments.length} deployments ({deployments.reduce(
					(total, item) => total + (item.pods ? item.pods.length : 0),
					0
				)} pods)</span
			>
		</h2>
	</summary>

	<div class="server-list deploys">
		{#each deployments as deploy (deploy)}
			<Deploy {deploy} />
		{/each}
	</div>
</details>

<style lang="scss">
	.search-section {
		padding: 1.714rem 0px;
	}

	.server-list {
		display: grid;
		--grid-tmpl-cols: repeat(1, 1fr);
		--grid-gap: 0.5rem;
		grid-template-columns: var(--grid-tmpl-cols, repeat(2, 1fr));
		gap: var(--grid-gap, 0.5rem);

		margin-bottom: 2rem;

		@media screen and (min-width: 480px) {
			--grid-tmpl-cols: repeat(2, 1fr);
		}
		@media screen and (min-width: 750px) {
			--grid-tmpl-cols: repeat(2, 1fr);
			--grid-gap: 1.25rem;
		}
		@media screen and (min-width: 1200px) {
			--grid-tmpl-cols: repeat(3, 1fr);
			--grid-gap: 2rem;
		}
	}

	.server-list.deploys {
		display: flex;
		flex-wrap: wrap;
	}

	details summary::-webkit-details-marker,
	details summary::marker {
		display: none;
	}

	details > summary {
		list-style: none;
		cursor: pointer;
	}

	:global(.server-list h2) {
		font-family: 'Reckless Neue';
		justify-content: unset !important;
	}
</style>
