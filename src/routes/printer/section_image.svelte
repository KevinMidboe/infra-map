<script lang="ts">
	import LiveImage from '$lib/components/LiveImage.svelte';
	import Section from '$lib/components/Section.svelte';

	let { data }: { data: any } = $props();
</script>

<Section
	title="Current print"
	description="Historical printer information, last prints and current status."
>
	<div class="images">
		<div>
			<h2>Camera</h2>
			<LiveImage imageUrl={`http://homeassistant.schleppe:8123${data['camera']?.picture}`} />
		</div>
		<div>
			<h2>Model</h2>
			<img src={`http://homeassistant.schleppe:8123${data['cover_image']?.picture}`} />
		</div>

		<div>
			<h2>Pick image</h2>
			<img src={`http://homeassistant.schleppe:8123${data['pick_image']?.picture}`} />
		</div>
	</div>
</Section>

<style lang="scss">
	.images {
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;

		img {
			width: 300px;
		}
	}
</style>
