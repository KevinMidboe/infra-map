<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import ServerComp from '$lib/components/Server.svelte';
	import ServerSummary from '$lib/components/ServerSummary.svelte';
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
						link: `/servers/vm/${vm.name}`,
						...vm
					};
				})
				.filter((d) => d.name),
			...nodes.map(node => {
				return {
					link: `/servers/node/${node.name}`,
					...node
				}
			}),
			...allLxcs.map(lxc => {
				return {
					link: `/servers/lxc/${lxc.name}`,
					...lxc
				}
			})
		];
	});
console.log(allLxcs)
</script>

<PageHeader>Servers</PageHeader>

<ServerSummary {nodes} />

<div class="server-list">
	{#each nodes as node (node.name)}
		<div>
			<ServerComp {node} />
		</div>
	{/each}
</div>

<style lang="scss">
	.server-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: left;
		gap: 2rem;
	}
</style>
