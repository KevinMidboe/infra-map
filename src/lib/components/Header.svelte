<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	// Create a derived store to extract breadcrumb data
	const breadcrumbs = derived(page, ($page) => {
		const segments = $page.url.pathname.split('/').filter(Boolean); // Remove empty segments

		return segments.map((segment, index) => {
			let label = decodeURI(segment);
			return {
				label,
				path: '/' + segments.slice(0, index + 1).join('/')
			};
		});
	});
</script>

<div class="header">
	<div class="left">
		<a href="/">
			<!-- <img src="/logo.png" /> -->
			<h1>schleppe.cloud</h1>
		</a>
	</div>

	<div class="middle crumbs">
		<a href="/">Home</a>
		{#each $breadcrumbs as crumb (crumb.label)}
			<span class="seperator">/</span>
			<a href={crumb.path}>{crumb.label}</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.header {
		position: sticky;
		top: 1rem;
		left: 0;

		display: grid;
		grid-template-columns: 200px 1fr auto;
		grid-template-areas: 'logoSection siteAndEnvironment profileAndHelp';
		align-items: center;
		background: var(--theme);
		padding: 0 1rem;
		border-radius: 6px;
		color: var(--bg);
		margin: 1rem 0.5rem 0 0.5rem;
		font-weight: 400;
		font-size: 1rem;
		z-index: 100;

		&::before {
			content: '';
			position: absolute;
			width: 100%;
			height: 1rem;
			top: -1rem;
			background-color: var(--bg);
			/* opacity: 0.6; */
		}

		h1 {
			font-size: 1.5rem;
			padding: 0;
			font-weight: 300;
			color: var(--bg) !important;
		}

		img {
			padding: 0rem 0;
			max-height: 2.5rem;
		}

		a,
		span {
			color: inherit;
		}

		.left,
		.middle,
		.right {
			min-height: 3.5rem;
			display: flex;
			align-items: center;
		}

		.left {
		}

		.crumbs {
			margin-left: 2rem;

			li {
				display: block;
				cursor: pointer;
			}

			.seperator {
				color: #7d6665;
				padding: 0 0.75rem;
			}
		}

		@media screen and (max-width: 750px) {
			top: -0.25rem;
			overflow: scroll;

			.crumbs {
				margin-left: 0;
			}
		}
	}

	:global(.right svg) {
		height: 1.5rem;
		width: 1.5rem;
		fill: white;
	}
</style>
