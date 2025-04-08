<script lang="ts">
	import { capitalizeFirstLetter } from '$lib/utils/string';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import Table from '$lib/components/Table.svelte';
	import Progress from '$lib/components/Progress.svelte';

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
	import type { PageData } from './$types';
	import type { Entity } from '$lib/interfaces/homeassistant';
	import type { Filament } from '$lib/interfaces/printer';

	let { data }: { data: PageData } = $props();
	const p1p: Entity[] = data?.p1p;
	const filament: Filament[] = data?.filament;

	const currentStage = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_current_stage'
	)[0];
	const printStatus = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_print_status'
	)[0];
	const bedTemp = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_bed_temperature'
	)[0];
	const nozzleTemp = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_nozzle_temperature'
	)[0];
	const totalUsage = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_total_usage'
	)[0];
	const nozzleType = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_nozzle_type'
	)[0];
	const nozzleSize = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_nozzle_size'
	)[0];
	const bedType = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_print_bed_type'
	)[0];
	const currentLayer = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_current_layer'
	)[0];
	const totalLayer = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_total_layer_count'
	)[0];
	const progress = p1p.filter(
		(el) => el.entity_id === 'sensor.p1p_01s00c370700273_print_progress'
	)[0];

	console.log(p1p);

	let columns = ['Hex', 'Color', 'Material', 'Weight', 'Count', 'Link'];
	const links = filament.map((f) => `/printer/${f.Color.replaceAll(' ', '-').toLowerCase()}`);

	const iconDictStage = {
		idle: PrinterIdle,
		printing: PrinterPrinting,
		paused: PrinterPaused,
		stopped: PrinterStopped,
		heatbed_preheating: PrinterPrinting,
		cleaning_nozzle_tip: PrinterPrinting,
		homing_toolhead: PrinterPrinting
	};
	const iconDictState = { running: Printing, pause: Paused, failed: Stopped, finish: Finished };

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
</script>

<PageHeader>Printer</PageHeader>

<div class="section-wrapper">
	<Section
		title="Printer status"
		description="Historical printer information, last prints and current status."
	>
		<div class="section-row">
			<div class="section-element">
				<label>Current stage</label>
				<span
					><span class="icon">
						<svelte:component this={iconDictStage[currentStage.state]} />
					</span>{currentStage.state}</span
				>
			</div>

			<div class="section-element">
				<label>Bed temperature</label>
				<span
					><span class="icon"><BedTemperature /></span>{bedTemp.state}
					{bedTemp.attributes.unit_of_measurement}</span
				>
			</div>

			<div class="section-element">
				<label>Nozzle temperature</label>
				<span
					><span class="icon"><NozzleTemperature /></span>{nozzleTemp.state}
					{nozzleTemp.attributes.unit_of_measurement}</span
				>
			</div>

			<div class="section-element">
				<label>Print status</label>
				<span>
					<span class={`icon ${printStatus?.state === 'running' ? 'spin' : ''}`}>
						<svelte:component this={iconDictState[printStatus.state]} /></span
					>
					{printStatus.state}
				</span>
			</div>
		</div>

		<div class="progress">
			<Progress value={progress.state} />
			{#if currentLayer.state !== totalLayer.state}
				<span>Currently printing layer line {currentLayer.state} of {totalLayer.state}</span>
			{:else}
				<span>Finished printing {currentLayer.state} of {totalLayer.state} layers!</span>
			{/if}
		</div>
	</Section>

	<Section
		title="Printer attributes"
		description="Historical printer information, last prints and current status."
	>
		<div class="section-row">
			<div class="section-element">
				<label>Total print time</label>
				<span>
					{Math.floor(Number(totalUsage.state) * 10) / 10}
					<!-- {formatDuration(totalUsage.state * 3600)} -->
					{totalUsage.attributes.unit_of_measurement}</span
				>
			</div>

			<div class="section-element">
				<label>Nozzle Type</label>
				<span
					>{capitalizeFirstLetter(nozzleType.state.replaceAll('_', ' '))}
					{nozzleType.attributes.unit_of_measurement}</span
				>
			</div>

			<div class="section-element">
				<label>Nozzle Size</label>
				<span>{nozzleSize?.state} {nozzleSize.attributes.unit_of_measurement}</span>
			</div>

			<div class="section-element">
				<label>Bed type</label>
				<span
					>{capitalizeFirstLetter(bedType?.state?.replaceAll('_', ' ') || 'not found')}
					{bedType?.attributes.unit_of_measurement}</span
				>
			</div>
		</div>

		<img src="/printer.png" />
	</Section>

	<Table
		title="Filaments"
		description={`${filament.length} colors are currently in stock. Overview of currently stocked filament.`}
		{columns}
		data={filament}
		{links}
		footer={`Last updated on ${lastUpdateFilament.title}`}
	/>
</div>

<style lang="scss">
	img {
		width: 120px;
		position: absolute;
		top: 1.2rem;
		right: 1.2rem;
	}

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
</style>
