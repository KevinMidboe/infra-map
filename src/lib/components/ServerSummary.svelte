<script lang="ts">
	import { formatBytes } from "$lib/utils/conversion";
	import type { Node } from "$lib/interfaces/proxmox";

	export let nodes: Node[];

	const totalCpu = nodes.map((n) => n.info.cpuinfo.cpus).reduce((a, b) => a + b, 0);
	const totalMem = nodes.map((n) => n.info.memory.total).reduce((a, b) => a + b, 0);
	const vmState = {
		total: nodes.map((n) => n.vms.filter((v) => v?.template !== 1)).flat(2).length,
		running: nodes
			.map((n) => n.vms.filter((v) => v?.template !== 1 && v.status === 'running'))
			.flat(2).length
	};

	const lxcState = {
		total: nodes.map((n) => n.lxcs.filter((l) => l?.template !== 1)).flat(2).length,
		running: nodes
			.map((n) => n.lxcs.filter((l) => l?.template !== 1 && l.status === 'running'))
			.flat(2).length
	};


</script>

<div class="main-container">
	<span>CPUs: <b>{totalCpu}</b></span>
	<span>Memory: <b>{formatBytes(totalMem)}</b></span>
	<span>VMs: <b>{vmState.running}/{vmState.total}</b></span>
	<span>LXCs: <b>{lxcState.running}/{lxcState.total}</b></span>
	<span>Nodes: <b>{nodes.length}</b></span>
</div>

<style lang="scss">
	.main-container {
		margin-bottom: 2rem;

		span {
			display: inline-block;

			&:not(:last-of-type) {
				margin-right: 0.75rem;
			}
		}

		b {
			font-family: 'Reckless Neue';
			font-size: 1.3rem;
			color: var(--theme);
		}
	}
</style>
