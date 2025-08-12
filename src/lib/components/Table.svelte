<script lang="ts">
	import Dialog from './Dialog.svelte';
	import { goto } from '$app/navigation';
	import Certificate from '$lib/icons/certificate.svelte';
	import { daysUntil } from '$lib/utils/conversion';
	import JsonViewer from './JsonViewer.svelte';

	export let title = '';
	export let description = '';
	export let columns: Array<string> | object;
	export let data: Array<unknown> = [];
	export let links: Array<string> = [];
	export let footer = '';

	const hasLinks = links?.length > 0;
	let displayColumns: string[] = [];
	if (typeof columns === 'object' && !Array.isArray(columns)) {
		displayColumns = Object.values(columns);
		columns = Object.keys(columns);
	}
</script>

<div class="main-container">
	<div class="header">
		<h2>{title}</h2>
		<div class="description">{description}</div>
	</div>
	<div class="actions">
		<slot name="actions"></slot>
	</div>
	<table>
		<thead>
			<tr>
				{#if displayColumns.length > 0}
					{#each displayColumns as column (column)}
						<th>{column}</th>
					{/each}
				{:else}
					{#each columns as column (column)}
						<th>{column}</th>
					{/each}
				{/if}
			</tr>
		</thead>

		<slot name="tbody"></slot>
	</table>

	{#if footer?.length}
		<footer>{footer}</footer>
	{/if}
</div>

<style lang="scss">
	.header {
		margin-bottom: 12px;
	}

	.description {
		font-size: 0.875rem;
		color: #666;
		margin-bottom: 12px;
	}

	.actions {
		margin-bottom: 12px;
	}

	footer {
		margin-top: 1rem;
	}
</style>
