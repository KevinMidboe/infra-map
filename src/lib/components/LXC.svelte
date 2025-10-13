<script lang="ts">
	import { goto } from '$app/navigation';
	import CubeSide from '$lib/icons/cube-side.svelte';
	import HardDrive from '$lib/icons/hard-disk.svelte';
	import Network from '$lib/icons/network.svelte';
	import CPU from '$lib/icons/cpu.svelte';
	import Fingerprint from '$lib/icons/fingerprint.svelte';
	import ExtractUp from '$lib/icons/extract-up.svelte';
	import InsertDown from '$lib/icons/insert-down.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Memory from '$lib/icons/floppy-disk.svelte';
	import { formatBytes, formatDuration } from '$lib/utils/conversion';
	import type { LXC } from '$lib/interfaces/proxmox';

	const { lxc }: { lxc: LXC } = $props();
</script>

<div class="card">
	<div class="header">
		<div class="icon"><CubeSide /></div>
		<span class="name">{lxc.name} <span class="subtle">{lxc.vmid}</span></span>

		<span class={`status ${lxc.status === 'running' ? 'ok' : 'error'}`}></span>
	</div>

	<div class="resource">
		<div class="title">
			<Network />
			<span>Status</span>
		</div>
		<span>{lxc.status}</span>

		<div class="title">
			<Network />
			<span>CPUs</span>
		</div>
		<span>{lxc.cpus}</span>

		<div class="title">
			<CPU />
			<span>CPU</span>
		</div>
		<span>{Math.floor(lxc.cpu * 100) / 100}</span>

		<div class="title">
			<HardDrive />
			<span>Max Disk</span>
		</div>
		<span>{formatBytes(lxc.maxdisk)}</span>

		<div class="title">
			<Memory />
			<span>Memory</span>
		</div>
		<span>{formatBytes(lxc.mem)}</span>

		<div class="title">
			<InsertDown />
			<span>Net In</span>
		</div>
		<span>{formatBytes(lxc.netin)}</span>

		<div class="title">
			<ExtractUp />
			<span>Net Out</span>
		</div>
		<span>{formatBytes(lxc.netout / 8)}</span>

		<div class="title">
			<Clock />
			<span>Uptime</span>
		</div>
		<span>{formatDuration(lxc.uptime)}</span>

		<div class="title">
			<Fingerprint />
			<span>lxc ID</span>
		</div>
		<span>{lxc.vmid}</span>
	</div>

	<div class="footer">
		<button on:click={() => goto(`/servers/lxc/${lxc.vmid}`)}>
			<span>Pod details</span>
		</button>
	</div>
</div>

<style lang="scss">
	@import '../styles/card.scss';

	.card {
		flex-grow: 1;
		max-width: 550px;
	}
</style>
