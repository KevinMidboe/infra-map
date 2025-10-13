<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ServerComp from '$lib/components/Server.svelte';
	import ServerSummary from '$lib/components/ServerSummary.svelte';
	import VMComp from '$lib/components/VM.svelte';
	import LXCComp from '$lib/components/LXC.svelte';
	import type { VM, LXC } from '$lib/components/VM.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { cluster, nodes } = data;
	const allVms: Array<VM> = nodes.flatMap((n) => n.vms).filter((v) => v.template !== 1);
	const allLxcs: Array<LXC> = nodes.flatMap((n) => n.lxcs);

	onMount(() => {
		window.elements = [
			...allVms
				.map((vm) => {
					return {
						link: `/servers/vm/${vm.vmid}`,
						...vm
					};
				})
				.filter((d) => d.name),
			...nodes.map((node) => {
				return {
					link: `/servers/node/${node.name}`,
					...node
				};
			}),
			...allLxcs.map((lxc) => {
				return {
					link: `/servers/lxc/${lxc.vmid}`,
					...lxc
				};
			})
		];
	});
</script>

<PageHeader>Servers</PageHeader>

<ServerSummary {nodes} />

<div class="server-list">
	{#each nodes as node (node.name)}
		<ServerComp {node} />
	{/each}
</div>

<details open>
	<summary>
		<h2>VMs</h2>
	</summary>

	<div class="vm-list">
		{#each allVms as vm (vm.vmid)}
			<VMComp {vm} />
		{/each}
	</div>
</details>

<details open>
	<summary>
		<h2>LXCs</h2>
	</summary>

	<div class="vm-list">
		{#each allLxcs as lxc (lxc)}
			<LXCComp {lxc} />
		{/each}
	</div>
</details>

<style lang="scss">
	*:not(:last-child) {
		margin-bottom: 2rem;
	}

	.server-list,
	.vm-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: left;
		gap: 2rem;

		&:not(:last-of-type) {
			margin-bottom: 2rem;
		}
	}

	h2 {
		font-weight: 500;
	}

	details summary::-webkit-details-marker,
	details summary::marker {
		display: none;
	}

	details > summary {
		list-style: none;
		cursor: pointer;
	}
</style>
