<script lang="ts">
	import Node from '$lib/components/Node.svelte';
	import Deploy from '$lib/components/Deploy.svelte';
	import Daemon from '$lib/components/Daemon.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';
	import type { V1DaemonSet, V1Deployment, V1Node } from '@kubernetes/client-node';

	let { data }: { data: PageData } = $props();

	const deployments: V1Deployment[] = data?.deployments;
	const daemons: V1DaemonSet[] = data?.daemons;
	const nodes: V1Node[] = data?.nodes;
</script>

<PageHeader>Cluster overview</PageHeader>

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
	.server-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;

		margin-bottom: 2rem;
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

	h2 {
		font-family: 'Reckless Neue';
	}
</style>
