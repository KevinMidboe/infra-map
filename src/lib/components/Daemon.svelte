<script lang="ts">
	import Pod from './Pod.svelte';
	import type { V1DaemonSet } from '@kubernetes/client-node';

	export let daemon: V1DaemonSet;

	let { metadata, status, pods } = daemon;

	const healthy =
		status?.desiredNumberScheduled && status?.desiredNumberScheduled === status?.numberReady;
</script>

<div class="card-container">
	<div class="namespace">
		<h2>{pods?.length} of {metadata?.name} in {metadata?.namespace}</h2>
	</div>

	<p>heatlthy: {healthy}</p>

	<div class="card-wrapper">
		{#each daemon?.pods as pod, i (pod)}
			<Pod parent={daemon} {pod} {i} />
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
			grid-template-columns: repeat(3, 1fr);
			gap: 2rem;
		}
	}

	.positive {
		color: #077c35;
	}
</style>
