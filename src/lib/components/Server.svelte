<script lang="ts">
	import ServerIcon from '$lib/icons/server.svelte';
	import CPU from '$lib/icons/cpu.svelte';
	import Shield from '$lib/icons/shield.svelte';
	import Floppy from '$lib/icons/floppy-disk.svelte';
	import Box from '$lib/icons/box.svelte';
	import LXC from '$lib/icons/cube-side.svelte';
	import Network from '$lib/icons/network.svelte';
	import Clock from '$lib/icons/clock.svelte';

	import { formatBytes, formatDuration } from '$lib/utils/conversion';
	import type { Node } from '$lib/interfaces/proxmox';
	import { onMount } from 'svelte';

	export let node: Node;

	const buttons = ['View logs', 'Web terminal', 'graphs'];

	let { cpuinfo, memory, uptime, loadavg } = node.info;

	const vmsRunning = node.vms.filter((v) => v?.template !== 1 && v.status === 'running');
	const vmsTotal = node.vms.filter((v) => v?.template !== 1);
	const lxcsRunning = node.lxcs.filter((l) => l?.template !== 1 && l.status === 'running');
	const lxcsTotal = node.lxcs.filter((l) => l?.template !== 1);

	onMount(() => {
		setInterval(() => (uptime += 1), 1000);
	});
</script>

<div class="card">
	<div class="header">
		<div class="icon"><ServerIcon /></div>
		<span class="name">{node?.name}</span>

		<span class={`status ${node?.online === 1 ? 'ok' : 'error'}`}></span>
	</div>

	<div class="resource">
		<div class="title">
			<Network />
			<span>Load</span>
		</div>
		<span>{loadavg}</span>

		<div class="title">
			<CPU />
			<span>CPU cores</span>
		</div>
		<span
			>{cpuinfo.cpus} Cores on {cpuinfo.sockets} {cpuinfo.sockets > 1 ? 'Sockets' : 'Socket'}</span
		>

		<div class="title">
			<Shield />
			<span>DDoS protection</span>
		</div>
		<span class="positive">Enabled</span>

		<div class="title">
			<Network />
			<span>IPs</span>
		</div>
		<span>{node?.ip}</span>

		<div class="title">
			<Floppy />
			<span>Memory</span>
		</div>
		<span>{formatBytes(memory?.total)}</span>

		<div class="title">
			<Box />
			<span>VMs</span>
		</div>
		<span>{vmsRunning.length} / {vmsTotal.length}</span>

		<div class="title">
			<LXC />
			<span>LXCs</span>
		</div>
		<span>{lxcsRunning.length} / {lxcsTotal.length}</span>

		<div class="title">
			<Clock />
			<span>Uptime</span>
		</div>
		<span>{formatDuration(uptime)}</span>
	</div>

	<div class="footer">
		{#each buttons as btn (btn)}
			<button on:click={() => console.log(node)}>
				<span>{btn}</span>
			</button>
		{/each}
	</div>
</div>

<style lang="scss">
	@keyframes pulse-live {
		0% {
			box-shadow: 0 0 0 0 rgba(0, 212, 57, 0.7);
			box-shadow: 0 0 0 0 rgba(0, 212, 57, 0.7);
		}
		70% {
			box-shadow: 0 0 0 10px rgba(0, 212, 57, 0);
			box-shadow: 0 0 0 10px rgba(0, 212, 57, 0);
		}
		100% {
			box-shadow: 0 0 0 0 rgba(0, 212, 57, 0);
			box-shadow: 0 0 0 0 rgba(0, 212, 57, 0);
		}
	}

	@mixin pulse-dot {
		&::after {
			content: '';
			top: 50%;
			margin-left: 0.4rem;
			position: absolute;
			display: block;
			border-radius: 50%;
			background-color: var(--color);
			border-radius: 50%;
			transform: translate(-50%, -50%);
			animation: pulse-live 2s infinite;
			height: 16px;
			width: 16px;
		}
	}
	.card {
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
				--color: var(--positive);
				@include pulse-dot;
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

		button {
			border: none;
			position: relative;
			background: transparent;
			height: unset;
			border-radius: 0.5rem;
			display: inline-block;
			text-decoration: none;
			padding: 0 0.5rem;
			flex: 1;

			span {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 1.5rem;
				padding: 0 0.5rem;
				margin-left: -0.5rem;
				border: 1px solid #eaddd5;
				border-radius: inherit;
				white-space: nowrap;
				cursor: pointer;
				font-weight: 700;
			}

			&::after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				border-radius: 0.5rem;
				width: 100%;
				height: 100%;
				transition: transform 0.1s ease;
				will-change: box-shadow 0.25s;
				pointer-events: none;
			}
		}
	}

	.positive {
		color: #077c35;
	}
</style>
