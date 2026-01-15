<script lang="ts">
	import Search from '$lib/icons/search.svelte';
	import Input from '$lib/components/Input.svelte';
	import Table from '$lib/components/Table.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import FormDNS from '$lib/components/forms/FormDNS.svelte';
	import type { Record } from '$lib/interfaces/DNS';
	import type { PageData } from '../$types';

	let { data }: { data: PageData } = $props();

	let recordsFilter = $state('');
	let recordsSort = $state('type');
	let open = $state(false);

	const rawRecords: Record[] = data?.records || [];
	let records = $derived(
		rawRecords
			?.filter(
				(r: Record) =>
					r.name?.toLowerCase()?.includes(recordsFilter) ||
					r.data?.toLowerCase()?.includes(recordsFilter)
			)
			.sort((a, b) => (a?.[recordsSort] < b?.[recordsSort] ? -1 : 1))
	);
</script>

<h1>DNS</h1>

<Table
	title="Zonal records"
	description="schleppe colors are currently in stock. Overview of currently stocked filament."
	columns={['Ping', 'Details', 'TTL']}
	data={records}
	footer="Last updated on ~some date~"
>
	<div slot="actions" class="filament-table-inputs">
		<div>
			<Input
				placeholder={`${records?.[0]?.name || 'record'}`}
				icon={Search}
				bind:value={recordsFilter}
				label="Records filter"
			/>
		</div>

		<button class="affirmative" on:click={() => (open = true)}><span>Add new</span></button>
	</div>

	<tbody slot="tbody">
		{#each records as row (row)}
			<tr>
				<td>{row?.available === true ? 'up' : 'down'}</td>
				<td class="info">
					<div class="meta">
						<span>name: {row.name}</span>
						<span>type: {row.type}</span>
						<span>addr: {row.a}</span>
					</div>
				</td>
				<td>{row.ttl}</td>
			</tr>
		{/each}
	</tbody>
</Table>

{#if open}
	<Dialog
		title="Add DNS record"
		description="You can select anything deployed in <b>Belgium (europe-west1) datacenter</b> and create an internal connection with your service."
		close={() => (open = false)}
	>
		<FormDNS close={() => (open = false)} />
	</Dialog>
{/if}

<style lang="scss">
	.section-element {
		.icon {
			display: inline-block;
			--size: 2rem;
			height: var(--size);
			width: var(--size);
			padding-right: 0.5rem;

			&.spin {
				@keyframes rotate {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				animation: rotate 6s linear infinite;
				transform-origin: calc((var(--size) / 2) - 2px) calc(var(--size) / 2);
			}
		}
	}

	.progress {
		display: flex;
		flex-direction: column;
		width: 100%;

		span {
			margin-top: 0.5rem;
		}
	}

	.filament-table-inputs {
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;

		> div {
			max-width: 450px;
		}

		> button {
			flex: unset;
			height: 2.6rem;
		}
	}

	/* filament table */
	tr td {
		&:first-of-type {
		}

		&.info {
			display: table-cell;
			vertical-align: middle;

			h2 {
				width: 100%;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin-bottom: 0.45em;
				font-size: 1.1rem;
				font-weight: 300;
				color: var(--theme);
			}

			.meta {
				display: flex;
				gap: 0.3rem;
				flex-direction: column;
				opacity: 0.6;
				word-break: break-all;
			}
		}
	}
	.color {
		--size: 4rem;
		display: block;
		width: var(--size);
		height: var(--size);
		border-radius: var(--border-radius, 1rem);
	}
</style>
