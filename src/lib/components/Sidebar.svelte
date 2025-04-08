<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	const pages = [
		{
			name: 'Home',
			path: '/'
		},
		{
			name: 'Sites',
			path: '/sites'
		},
		{
			name: 'Servers',
			path: '/servers'
		},
		{
			name: 'Printer',
			path: '/printer'
		},
		{
			name: 'Network',
			path: '/network'
		},
		{
			name: 'Cluster',
			path: '/cluster'
		},
		{
			name: 'Health',
			path: '/health'
		}
	];

	const activePage = derived(page, ($page) => $page.url.pathname);
</script>

<div class="nav-wrapper">
	<nav>
		{#each pages as page, i (page.name)}
			{#if i === 0}
				<a class={$activePage === page.path ? 'highlight' : ''} href={page.path}>{page.name}</a>
			{:else}
				<a
					class={`${$activePage !== page.path && $activePage.startsWith(page.path) ? 'child' : ''} ${$activePage.startsWith(page.path) ? 'highlight' : ''}`}
					href={page.path}>{page.name}</a
				>
			{/if}
		{/each}
	</nav>
</div>

<style lang="scss">
	.nav-wrapper {
		--nav-width: 240px;
		top: 72px;
		left: 0;
		min-width: var(--nav-width);
		margin-right: 1rem;

		@media screen and (max-width: 700px) {
			--nav-width: 100px;
			margin-left: 0.5rem;
			margin-right: 0;
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		position: fixed;
		width: var(--nav-width);
		gap: 4px;
		margin-top: 1rem;

		a {
			position: relative;
			display: flex;
			padding: 0.75rem 1rem;
			font-weight: 600;
			border: 2px solid transparent;
			border-radius: 0.5rem;
			transition: 0.3s ease all;
			overflow: hidden;

			&:hover,
			&.highlight {
				background-color: var(--highlight);
			}

			&::after {
				position: absolute;
				transition: inherit;
				left: -2rem;
				opacity: 0;
				content: '->';
			}

			&.child {
				padding-left: 2.5rem;

				&::after {
					opacity: 1;
					position: absolute;
					left: 1rem;
					content: '->';
				}
			}
		}
	}
</style>
