<script lang="ts">
	import JsonViewer from '$lib/components/JsonViewer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import VMDescribe from '$lib/components/prox-describe/VM.svelte';
	import External from '$lib/icons/external.svelte';
	import Link from '$lib/icons/link.svelte';
	import type { Node, VM } from '$lib/interfaces/proxmox';
	import type { PageData, PageProps } from './$types';

	let { data }: { data: PageData } = $props();
	const { error, kind } = data;
	const { resource }: { vm: VM; node: Node } = data;
	console.log('RESOURCE', resource);

	let res = $state(data.kind);
	const template = `https://apollo.schleppe:8006/#v1:0:=qemu%2F${resource?.vmid}:4:::::::`
	console.log('kind res:', res);
</script>

<PageHeader>{kind || 'Resource'}: {resource?.name || 'not found'}</PageHeader>

{#if error}
	<p>{error}</p>
{/if}

{#if resource}
	<div class="title">
		<a href={template}>View in proxmox</a>
		<span class="link"><External /></span>
	</div>

	{#if kind == 'vm'}
		<VMDescribe vm={resource} />
	{:else}
		<p>{kind} stuffs</p>
		<JsonViewer json={resource} />
	{/if}
{:else}
	<h2>404. '{kind}' resource not found!</h2>
{/if}

<style lang="scss">
	.title {
		font-size: 1.1rem;
		font-family: 'Reckless Neue';
	}

	.link {
		display: inline-block;
		height: 1rem;
		width: 1rem;
	}
</style>
