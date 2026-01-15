<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Dialog from '$lib/components/Dialog.svelte';
	import Section from '$lib/components/Section.svelte';
	import FormSite from '$lib/components/forms/FormSite.svelte';
	import ThumbnailButton from '$lib/components/ThumbnailButton.svelte';
	import type { Site } from '$lib/interfaces/site.ts';
	import { onMount } from 'svelte';

	let { data }: { data: { site: Site } } = $props();
	let open = $state(false);

	const { sites } = data;

	onMount(() => window.elements = sites)
</script>

<PageHeader>Sites
			<button class="add-site-btn affirmative" on:click={() => (open = true)}><span>Add new site</span></button>
</PageHeader>

<div class="section-wrapper">
	{#each sites as site (site)}
		<ThumbnailButton
			title={site.name}
			image={site.image}
			background={site.background}
			color={site.color}
			link={site.link}
		/>
	{/each}
</div>

{#if open}
	<Dialog
		close={() => (open = false)}
		title="Add new site"
		description="You can select anything deployed in <b>Belgium (europe-west1) datacenter</b> and create an internal connection with your service."
	>
		<FormSite on:close={() => (open = false)} />
	</Dialog>
{/if}

<style lang="scss">
	.section-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		@media screen and (max-width: 1000px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media screen and (max-width: 750px) {
			grid-template-columns: repeat(2, 1fr);

			&.full-width {
				grid-template-columns: repeat(1, 1fr);
			}
		}

		&:not(:first-of-type) {
			margin-top: 4rem;
		}
	}

	:global(button.add-site-btn) {
		font-size: 1.2rem;
		float: right;
		height: 2.5rem;
	}
</style>
