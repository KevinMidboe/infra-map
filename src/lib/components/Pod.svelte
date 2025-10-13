<script lang="ts">
	import Connection from '$lib/icons/connection.svelte';
	import Network from '$lib/icons/network.svelte';
	import Layers from '$lib/icons/layers.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Sync from '$lib/icons/sync.svelte';
	import { formatDuration } from '$lib/utils/conversion';

	import { onMount } from 'svelte';
	import type { V1DaemonSet, V1Deployment, V1Pod } from '@kubernetes/client-node';
	import { writable } from 'svelte/store';
	import { goto } from '$app/navigation';

	export let pod: V1Pod;
	export let parent: V1Deployment | V1DaemonSet;
	export let i: number;

	let { metadata, spec, status } = pod;

	// set name
	const name =
		metadata?.name || metadata?.labels?.app || metadata?.labels?.['app.kubernetes.io/app'];

	// set replicas
	let replicas = -1;
	if (parent.spec?.['replicas'] !== undefined) {
		parent = parent as V1Deployment;
		replicas = parent.spec?.replicas || replicas;
	} else if (parent.status?.['currentNumberScheduled'] !== undefined) {
		parent = parent as V1DaemonSet;
		replicas = parent.status?.currentNumberScheduled || replicas;
	}

	// set uptime
	let uptime = writable(new Date().getTime() - new Date(status?.startTime || 0).getTime());

	function idlePhase(phase: string | undefined) {
		const phases = ['Failed', 'Succeeded'];
		return phases.includes(phase || '');
	}

	onMount(() => {
		setInterval(() => uptime.update((n) => n + 1000), 1000);
	});
</script>

<div class={`card ${idlePhase(status?.phase) && 'not-running'}`}>
	<div class="header">
		<div class="icon"><Layers /></div>
		<span class="name">{name}</span>

		<!--
			<span class={`status ${node?.online === 1 ? 'ok' : 'error'}`}></span>
			-->
	</div>

	<div class="resource">
		<div class="title">
			<Network />
			<span>Status</span>
		</div>
		<span>{status?.phase}</span>

		<div class="title">
			<Network />
			<span>Pod IP address</span>
		</div>
		<span>{status?.podIP}</span>

		<div class="title">
			<Layers />
			<span>Instances</span>
		</div>
		<span>{i + 1} of {replicas}</span>

		<div class="title">
			<Sync />
			<span>Restarts</span>
		</div>
		<span>{status?.containerStatuses?.[0].restartCount}</span>

		<div class="title">
			<Connection />
			<span>Running on Node</span>
		</div>
		<span>{spec?.nodeName}</span>

		<div class="title">
			<Clock />
			<span>Uptime</span>
		</div>
		<span>{formatDuration($uptime / 1000)}</span>
		<!--
			<span>{uptime}</span>

			<Lifecycle {conditions} />
			-->
	</div>

	<div class="footer">
		<button on:click={() => goto(`/cluster/pod/${pod.metadata?.uid}`)}>
			<span>Pod details</span>
		</button>
	</div>
</div>

<style lang="scss">
	@import "../styles/card.scss";

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
</style>
