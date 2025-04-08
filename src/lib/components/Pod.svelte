<script lang="ts">
	import Connection from '$lib/icons/connection.svelte';
	import Network from '$lib/icons/network.svelte';
	import Layers from '$lib/icons/layers.svelte';
	import Clock from '$lib/icons/clock.svelte';
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

	onMount(() => {
		setInterval(() => uptime.update((n) => n + 1000), 1000);
	});
</script>

<div class="card">
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

	.card {
		flex-grow: 1;
		max-width: 550px;

		background: #fbf6f4;
		box-shadow: var(
			--str-shadow-s,
			0px 0px 2px #22242714,
			0px 1px 4px #2224271f,
			0px 4px 8px #22242729
		);
		pointer-events: all;
		cursor: auto;
	}

	.header {
		display: flex;
		padding: 0.75rem;
		background-color: white;
		align-items: center;
		font-size: 16px;

		.icon {
			height: 24px;
			width: 24px;
			margin-right: 0.75rem;
		}

		.status {
			height: 1rem;
			width: 1rem;
			border-radius: 50%;
			margin-left: auto;
			position: relative;

			&.ok {
				background-color: var(--positive);
			}
			&.warning {
				background-color: var(--warning);
			}
			&.error {
				background-color: var(--negative);
			}
		}
	}

	.footer {
		padding: 0.5rem;
		background-color: white;
	}

	.resource {
		display: grid;
		grid-template-columns: auto auto;
		padding: 0.5rem;
		background-color: var(--bg);

		row-gap: 6px;
		column-gap: 20px;

		> div,
		span {
			display: flex;
			padding: 0 0.5rem;
		}
	}

	:global(.resource .title svg) {
		height: 1rem;
		width: 1rem;
	}

	.footer {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;

		margin-top: auto;
		background: white;
		padding: 0.5rem;
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}

	.positive {
		color: #077c35;
	}
</style>
