<script lang="ts">
	import Pod from './Pod.svelte';
	import type { V1DaemonSet } from '@kubernetes/client-node';

	export let daemon: V1DaemonSet;

	let { metadata, status, pods } = daemon;

	const healthy =
		status?.desiredNumberScheduled && status?.desiredNumberScheduled === status?.numberReady;
	const daemonUrl = `/cluster/daemonset/${metadata?.uid}`;
</script>

<div class="card-container">
	<div class="namespace">
		<h2>{pods?.length} of <a href={daemonUrl}>{metadata?.name}</a> in {metadata?.namespace}</h2>
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
		width: calc(100% - 1.5rem);
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

	.positive {
		color: #077c35;
	}
</style>
