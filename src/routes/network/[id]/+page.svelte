<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const { router } = data;
</script>

<PageHeader>Network: {router.service}</PageHeader>

<div>
	<p>router:</p>
	<pre><code>{JSON.stringify(router, null, 2)}</code></pre>
</div>
