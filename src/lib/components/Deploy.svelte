<script lang="ts">
	import Pod from './Pod.svelte';

	import type { V1Deployment } from '@kubernetes/client-node';

	export let deploy: V1Deployment;

	let { metadata, pods } = deploy;

	const deploymentUrl = `/cluster/deployment/${metadata?.uid}`;
</script>

<div class="card-container">
	<div class="namespace">
		<h2>
			<a href={deploymentUrl}>{metadata?.name}</a> in
			{metadata?.namespace}
		</h2>
	</div>

	<div class="card-wrapper">
		{#each pods as pod, i (pod)}
			<Pod parent={deploy} {pod} {i} />
		{/each}
	</div>
</div>

<style lang="scss">
	.card-container {
		background-color: #cab2aa40;
		border-radius: 0.5rem;
		width: 100%;
		padding: 0.75rem;

		.namespace {
			width: 100%;
			display: block;
		}

		.card-wrapper {
			display: grid;
			grid-template-columns: var(--grid-tmpl-cols, repeat(3, 1fr));
			gap: var(--grid-gap, 2rem);
		}
	}
</style>
