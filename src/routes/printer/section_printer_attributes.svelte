<script lang="ts">
	import Section from '$lib/components/Section.svelte';
	import { capitalizeFirstLetter } from '$lib/utils/string';

	let { data }: { data: any } = $props();
</script>

<Section
	title="Printer attributes"
	description="Historical printer information, last prints and current status."
>
	<div class="section-row">
		<div class="section-element">
			<label>Total print time</label>
			<span>
				{Math.floor(Number(data['total_usage']?.value) * 10) / 10}
				<!-- {formatDuration(totalUsage.value * 3600)} -->
				{data['total_usage']?.unit}</span
			>
		</div>

		<div class="section-element">
			<label>Total print length</label>
			<span>
				{Math.floor(Number(data['print_length']?.value) * 10) / 10}
				{data['print_length']?.unit}</span
			>
		</div>

		<div class="section-element">
			<label>Nozzle Type</label>
			<span
				>{capitalizeFirstLetter(data?.['nozzle_type']?.value?.replaceAll('_', ' '))}
				{data['nozzle_type']?.unit}</span
			>
		</div>

		<div class="section-element">
			<label>Nozzle Size</label>
			<span>{data['nozzle_size']?.value} {data['nozzle_size']?.unit}</span>
		</div>

		<div class="section-element">
			<label>Bed type</label>
			<span
				>{capitalizeFirstLetter(data['print_bed_type']?.value?.replaceAll('_', ' ') || 'not found')}
				{data['print_bed_type']?.unit}</span
			>
		</div>

		<div class="section-element">
			<label>SD Card status</label>
			<span
				>{data['sd_card_status']?.value}
				{data['sd_card_status']?.unit}</span
			>
		</div>

		<div class="section-element">
			<label>WiFi signal</label>
			<span>{data['wi_fi_signal']?.value} {data['wi_fi_signal']?.unit}</span>
		</div>
	</div>

	<div class="printer-image">
		<img src="/printer.png" />
	</div>
</Section>

<style lang="scss">
	.printer-image img {
		width: 120px;
		position: absolute;
		top: 1.2rem;
		right: 1.2rem;
	}
</style>
