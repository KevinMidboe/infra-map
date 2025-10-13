<script lang="ts">
	import { formatTimeLeft } from '$lib/utils/conversion';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Table from '$lib/components/Table.svelte';
	import Progress from '$lib/components/Progress.svelte';
	import Input from '$lib/components/Input.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import FormFilament from '$lib/components/forms/FormFilament.svelte';

	import Finished from '$lib/icons/finished.svelte';
	import Paused from '$lib/icons/paused.svelte';
	import Stopped from '$lib/icons/stopped.svelte';
	import Printing from '$lib/icons/printing.svelte';
	import PrinterIdle from '$lib/icons/printer-idle.svelte';
	import PrinterPaused from '$lib/icons/printer-paused.svelte';
	import PrinterPrinting from '$lib/icons/printer-printing.svelte';
	import PrinterStopped from '$lib/icons/printer-stopped.svelte';
	import NozzleTemperature from '$lib/icons/temperature-nozzle.svelte';
	import BedTemperature from '$lib/icons/temperature-bed.svelte';
	import Search from '$lib/icons/search.svelte';
	import type { PageData } from './$types';
	import type { Filament } from '$lib/interfaces/printer';
	import Weight from '$lib/icons/weight.svelte';
	import Speed from '$lib/icons/speed.svelte';
	import { onMount, onDestroy } from 'svelte';
	import Time from '$lib/icons/time.svelte';
	import { goto, invalidateAll } from '$app/navigation';
	import PrinterImage from './section_image.svelte';
	import PrinterAttributes from './section_printer_attributes.svelte';
	import { formatDateIntl } from '$lib/utils/conversion';
	import Length from '$lib/icons/Length.svelte';

	interface PrinterState {
		[key: string]: {
			value: string;
			unit?: string;
			picture?: string;
		};
	}

	let { data }: { data: PageData } = $props();
	let printer: PrinterState = $state(data?.p1p);
	let filamentFilter = $state('');
	let secondsLeft = $state(0);
	let open = $state(false);
	let timeLeftInterval: ReturnType<typeof setInterval>;

	console.log("got data:", data)
	const rawFilament: Filament[] = data?.filament || [];
	let filament = $derived(
		rawFilament
			?.filter(
				(f: Filament) =>
					f.color.toLowerCase().includes(filamentFilter) ||
					f.material.toLowerCase().includes(filamentFilter)
			)
			.sort((a, b) => (a.updated > b.updated ? -1 : 1))
	);

	function reloadProps() {
		invalidateAll().then(() => (printer = data?.p1p));
	}

	// console.log(p1p);

	const filamentLink = (f: Filament) =>
		`/printer/filament/${f.color.replaceAll(' ', '-').toLowerCase()}`;

	const iconDictState = { running: Printing, pause: Paused, failed: Stopped, finish: Finished };
	const iconDictStage = {
		idle: PrinterIdle,
		printing: PrinterPrinting,
		paused: PrinterPaused,
		stopped: PrinterStopped,
		heatbed_preheating: PrinterPrinting,
		cleaning_nozzle_tip: PrinterPrinting,
		homing_toolhead: PrinterPrinting
	};

	function isObjKey<T>(key: PropertyKey, obj: T): key is keyof T {
		return key in obj;
	}

	const stateToIcon = (key: string) => {
		if (!isObjKey(key, iconDictStage)) return;

		return iconDictStage[key];
	};

	interface FilamentUpdated {
		date: Date;
		title?: string;
	}
	const lastUpdateFilament: FilamentUpdated = {
		date: new Date('2025-04-01T05:47:01+00:00')
	};
	lastUpdateFilament.title = lastUpdateFilament.date
		.toLocaleDateString('en-US', {
			weekday: 'long',
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		})
		.toLowerCase();

	function updateTimeLeft() {
		if (secondsLeft <= 0) {
			clearInterval(timeLeftInterval);
		}

		const now = new Date();
		const diffMs = new Date(printer['end_time']?.value).getTime() - now.getTime();
		secondsLeft = Math.max(Math.floor(diffMs / 1000), 0);
	}

	onMount(() => {
		// only poll status updates if not idle
		if (printer['print_status']?.value === 'idle') return;
		updateTimeLeft();

		timeLeftInterval = setInterval(updateTimeLeft, 1000);
		const refreshStateInterval = setInterval(reloadProps, 5000);

		return () =>
			Promise.all([clearInterval(timeLeftInterval), clearInterval(refreshStateInterval)]);
	});

	onDestroy(() => {
		clearInterval(timeLeftInterval);
	});
</script>

<PageHeader>Printer</PageHeader>

<div class="section-wrapper">
	<Section
		title="Printer status"
		description="Historical printer information, last prints and current status."
	>
		<div slot="top-left">
			<button on:click={reloadProps}><span>Reload</span></button>
		</div>

		<div class="section-row">
			<div class="section-element">
				<label>Current stage</label>
				<span
					><span class="icon">
						<svelte:component this={stateToIcon(printer['current_stage']?.value || '')} />
					</span>{printer['current_stage']?.value}</span
				>
			</div>

			<div class="section-element">
				<label>Bed temp</label>
				<span
					><span class="icon"><BedTemperature /></span>{printer['bed_temperature']?.value}
					{printer['bed_temperature']?.unit}</span
				>
			</div>

			<div class="section-element">
				<label>Nozzle temp</label>
				<span
					><span class="icon"><NozzleTemperature /></span>{printer['nozzle_temperature']?.value}
					{printer['nozzle_temperature']?.unit}</span
				>
			</div>

			<div class="section-element">
				<label>Speed profile</label>
				<span
					><span class="icon"><Speed /></span>{printer['speed_profile']?.value}
					{printer['speed_profile']?.unit}</span
				>
			</div>

			<div class="section-element">
				<label>Print weight</label>
				<span
					><span class="icon" style="--size: 1.8rem"><Weight /></span>{printer['print_weight']
						?.value}
					{printer['print_weight']?.unit}</span
				>
			</div>

			<div class="section-element">
				<label>Print length</label>
				<span
					><span class="icon"><Length /></span>{printer['print_length']?.value}
					{printer['print_length']?.unit}</span
				>
			</div>

			<div class="section-element">
				<label>Print status</label>
				<span>
					<span class={`icon ${printer['print_status']?.value === 'running' ? 'spin' : ''}`}>
						<svelte:component this={iconDictState[printer['print_status']?.value]} /></span
					>
					{printer['print_status']?.value}
				</span>
			</div>

			<div class="section-element">
				<label>Time left</label>
				<span><span class="icon"><Time /></span>{formatTimeLeft(secondsLeft)}</span>
			</div>
		</div>

		<div class="progress">
			<Progress value={printer['print_progress']?.value} />

			{#if printer['current_layer']?.value !== printer['total_layer_count']?.value}
				<span
					>Currently printing layer line {printer['current_layer']?.value} of {printer[
						'total_layer_count'
					]?.value}</span
				>
			{:else}
				<span
					>Finished printing {printer['current_layer']?.value} of {printer['total_layer_count']
						?.value} layers!</span
				>
			{/if}
		</div>
	</Section>

	<PrinterImage data={printer} />

	<PrinterAttributes data={printer} />

	<Table
		title="Filaments"
		description={`${filament.length} colors are currently in stock. Overview of currently stocked filament.`}
		columns={['Color', 'Details', 'Last bought']}
		data={filament}
		footer={`Last updated on ${lastUpdateFilament.title}`}
	>
		<div slot="actions" class="filament-table-inputs">
			<div>
				<Input placeholder="Filter filaments" icon={Search} bind:value={filamentFilter} />
			</div>

			<button class="affirmative" on:click={() => (open = true)}><span>Add new</span></button>
		</div>

		<tbody slot="tbody">
			{#each filament as row (row)}
				<tr class="link" on:click={() => goto(filamentLink(row))}>
					<td><span class="color" style={`background: ${row.hex}`} /></td>
					<td class="info">
						<h2>{row.material} in {row.color}</h2>
						<div class="meta">
							<span>Roll:&#9; {row.weight}</span>
							<span>Color:&#9; {row.hex}</span>
							<span>Last bought:&#9; {formatTimeLeft(row.updated / 1000)}</span>
						</div>
					</td>

					<td>{formatDateIntl(new Date(row.updated * 1000))}</td>
				</tr>
			{/each}
		</tbody>
	</Table>
</div>

{#if open}
	<Dialog
		close={() => (open = false)}
		title="Add new filament"
		description="You can select anything deployed in <b>Belgium (europe-west1) datacenter</b> and create an internal connection with your service."
	>
		<FormFilament on:close={() => (open = false)} />
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
			height: 120px;
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
				color: #6a6a6a;
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
