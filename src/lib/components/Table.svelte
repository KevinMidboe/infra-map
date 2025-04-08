<script lang="ts">
	import { goto } from '$app/navigation';

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
		<slot></slot>
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
		<tbody>
			{#each data as row, i (row)}
				<tr on:click={() => hasLinks && goto(links[i])} class={hasLinks ? 'link' : ''}>
					{#each columns as column (column)}
						{#if column === 'Link'}
							<td><a href={row[column]}>Link</a></td>
						{:else if column === 'Hex'}
							<td><span class="color" style={`background: ${row[column]}`} /></td>
						{:else if Array.isArray(row[column])}
							<td>{row[column].join(', ')}</td>
						{:else}
							<td>{row[column]}</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
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

	table {
		width: 100%;
		border-collapse: collapse;
		font-family: sans-serif;
		border-radius: 8px;
		overflow: hidden;
	}

	th,
	td {
		padding: 12px;
		text-align: left;
		transition: background-color 0.25s;
	}

	th {
		font-weight: 500;
		font-family: 'Inter', sans-serif;
		font-size: 14px;
		font-stretch: 2px;
		border-bottom: 1px solid #eaddd5;
	}

	tr {
		&:not(&:last-of-type) {
			border-bottom: 1px solid #eaddd5;
		}

		&:hover > td {
			background-color: var(--highlight);
			background-color: #f5ede9;
		}

		&.link {
			cursor: pointer;
		}
	}

	td {
		padding-top: 2rem;
		padding-bottom: 2rem;
	}

	.color {
		--size: 2rem;
		display: block;
		width: calc(var(--size) * 2);
		height: var(--size);
		margin-top: -calc(var(--size / 2));
		margin-bottom: -calc(var(--size / 2));
		border-radius: var(--border-radius, 1rem);
	}

	footer {
		margin-top: 1rem;
	}
</style>
