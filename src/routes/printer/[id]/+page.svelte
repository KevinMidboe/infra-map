<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const filament = data?.filament;
</script>

{#if filament !== null}
	<PageHeader>Filament: {filament?.Color}</PageHeader>

	<div class="page">
		<div class="color-block" style={`background: ${filament?.Hex}`}></div>
	</div>
{:else}
	<PageHeader>Filament not found!</PageHeader>

	<p>Unable to find filament {data.id}, no swatch to display.</p>
{/if}

<style lang="scss">
	.color-block {
		--size: 2rem;
		padding: var(--size);
		width: calc(100% - (2 * var(--size)));
		height: calc(100% - (2 * var(--size)));
		height: calc(90vh - 18rem);
		border-radius: 1.5rem;
	}
</style>
