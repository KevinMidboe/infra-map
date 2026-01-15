<script lang="ts">
	import { goto } from '$app/navigation'
	import Desktop from '$lib/icons/desktop.svelte';
	import HardDrive from '$lib/icons/hard-disk.svelte';
	import Network from '$lib/icons/network.svelte';
	import CPU from '$lib/icons/cpu.svelte';
	import Fingerprint from '$lib/icons/fingerprint.svelte';
	import ExtractUp from '$lib/icons/extract-up.svelte';
	import InsertDown from '$lib/icons/insert-down.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import Memory from '$lib/icons/floppy-disk.svelte';
	import { formatBytes, formatDuration } from '$lib/utils/conversion';
	import type { VM } from '$lib/interfaces/proxmox';
	const { vm }: { vm: VM } = $props();
</script>

<div class="card">
	<div class="header">
		<div class="icon"><Desktop /></div>
		<span class="name">{vm.name} <span class="subtle">{vm.vmid}</span></span>

		<span class={`status ${vm.status === 'running' ? 'ok' : 'error'}`}></span>
	</div>

	<div class="resource">
		<div class="title">
			<Network />
			<span>Status</span>
		</div>
		<span>{vm.status}</span>

		<div class="title">
			<Network />
			<span>CPUs</span>
		</div>
		<span>{vm.cpus}</span>

		<div class="title">
			<CPU />
			<span>CPU</span>
		</div>
		<span>{Math.floor(vm.cpu * 100) / 100}</span>

		<div class="title">
			<HardDrive />
			<span>Max Disk</span>
		</div>
		<span>{formatBytes(vm.maxdisk)}</span>

		<div class="title">
			<Memory />
			<span>Memory</span>
		</div>
		<span>{formatBytes(vm.mem)}</span>

		<div class="title">
			<InsertDown />
			<span>Net In</span>
		</div>
		<span>{formatBytes(vm.netin)}</span>

		<div class="title">
			<ExtractUp />
			<span>Net Out</span>
		</div>
		<span>{formatBytes(vm.netout / 8)}</span>

		<div class="title">
			<Clock />
			<span>Uptime</span>
		</div>
		<span>{formatDuration(vm.uptime)}</span>

		<div class="title">
			<Fingerprint />
			<span>VM ID</span>
		</div>
		<span>{vm.vmid}</span>
	</div>

	<div class="footer">
		<button on:click={() => goto(`/servers/vm/${vm.name}`)}>
			<span>VM details</span>
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
