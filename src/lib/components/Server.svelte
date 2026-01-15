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
	import { goto } from '$app/navigation';
	import Speed from '$lib/icons/speed.svelte';
	import Fingerprint from '$lib/icons/fingerprint.svelte';

	export let node: Node;

	const buttons = [
		{ name: 'View logs', link: `https://${node.ip}:8006/#v1:0:=node%2F${node.name}:4:25::::::` },
		{
			name: 'Terminal',
			link: `https://${node.ip}:8006/#v1:0:=node%2F${node.name}:4:=jsconsole::::::`
		},
		{ name: 'Graphs', link: `https://${node.ip}:8006/#v1:0:=node%2F${node.name}:4:5::::::` },
		{ name: 'Details', link: `/servers/node/${node.name}` }
	];

	let { cpuinfo, memory, uptime, loadavg } = node.info;

	const vmsRunning = node.vms.filter((v) => v?.template !== 1 && v.status === 'running');
	const vmsTotal = node.vms.filter((v) => v?.template !== 1);
	const lxcsRunning = node.lxcs.filter((l) => l?.template !== 1 && l.status === 'running');
	const lxcsTotal = node.lxcs.filter((l) => l?.template !== 1);

	const t = cpuinfo.model.match(/(\w+\(\w+\)) (\w+\(\w+\)) (.*)/);
	const cpu = t[3].replaceAll('  ', ' ');

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
			<Fingerprint />
			<span>Model</span>
		</div>
		<span>{cpu}</span>

		<div class="title">
			<Speed />
			<span>Turbo speed</span>
		</div>
		<span>{Math.floor(node.info.cpuinfo.mhz) / 1000} GHz</span>

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
			<a href={btn.link} target={btn.link[0] === '/' ? '' : '_blank'} rel="noopener noreferrer">
				<button>
					<span>{btn.name}</span>
				</button>
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	@import '../styles/card.scss';
</style>
