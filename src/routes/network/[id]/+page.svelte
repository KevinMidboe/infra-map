<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import JsonViewer from '$lib/components/JsonViewer.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { router } = data;
</script>

<PageHeader>Network: {router.service}</PageHeader>

<JsonViewer json={router} />
