<script lang="ts">
	export let title = '';
	export let description = '';
	export let columns: Array<string> | object;
	export let data: Array<unknown> = [];
	export let links: Array<string> = [];
	export let footer = '';

	let displayColumns: string[] = [];
	if (typeof columns === 'object' && !Array.isArray(columns)) {
		displayColumns = Object.values(columns);
		columns = Object.keys(columns);
	}
</script>

<div class="main-container">
	{#if title?.length || description?.length}
		<div class="header">
			<h2>{title}</h2>
			<div class="description">{description}</div>
		</div>
	{/if}

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
