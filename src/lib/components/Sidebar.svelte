<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	let mobileNavOpen = $state(false);
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
	const toggle = () => {
		mobileNavOpen = !mobileNavOpen;

		// nav opens
		if (mobileNavOpen) {
			const index = pages.findIndex((page) => $activePage === page.path);
			const el: HTMLElement = document.getElementsByTagName('nav')[0].getElementsByTagName('a')[
				index
			];
			if (!el) return;

			setTimeout(() => {
				el?.scrollIntoViewIfNeeded();
			}, 300);
		}
	};
</script>

<div class={`nav-wrapper ${mobileNavOpen ? 'open' : ''}`}>
	<nav>
		{#each pages as page, i (page.name)}
			{#if i === 0}
				<a
					class={$activePage === page.path ? 'highlight' : ''}
					on:click={() => (mobileNavOpen = false)}
					href={page.path}>{page.name}</a
				>
			{:else}
				<a
					class={`${$activePage !== page.path && $activePage.startsWith(page.path) ? 'child' : ''} ${$activePage.startsWith(page.path) ? 'highlight' : ''}`}
					on:click={() => (mobileNavOpen = false)}
					href={page.path}>{page.name}</a
				>
			{/if}
		{/each}
	</nav>
</div>

<div id="mobile-nav-toggle" class={mobileNavOpen ? 'open' : ''} on:click={toggle}>
	<span></span>
	<span></span>
	<span></span>
</div>

<style lang="scss">
	#mobile-nav-toggle {
		--size: 3rem;
		--padding: 2rem;
		position: fixed;
		z-index: 99;
		width: var(--size);
		height: var(--size);
		border-radius: 50%;
		right: 1rem;
		bottom: var(--padding);
		background-color: var(--color);
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: all 0.2s ease-in-out;

		@media screen and (min-width: 750px) {
			display: none;
		}

		span {
			width: 50%;
			border-radius: 4px;
			height: 3px;
			background-color: var(--highlight);
			transition: all 0.2s ease-in-out;
			opacity: 100%;
		}

		&.open,
		&:hover {
			height: calc(var(--size) + 4px);
			width: calc(var(--size) + 4px);
			margin-bottom: -2px;
			margin-right: -2px;
		}

		&.open {
			span {
				margin-left: 10px;
			}

			span:nth-child(1) {
				transform: rotate(45deg);
				transform-origin: top left;
			}

			span:nth-child(2) {
				opacity: 0%;
				height: 1px;
			}

			span:nth-child(3) {
				transform: rotate(-45deg);
				transform-origin: bottom left;
			}
		}
	}

	.nav-wrapper {
		--nav-width: 240px;
		top: 72px;
		right: 0;
		min-width: var(--nav-width);
		margin-right: 1rem;
		transition: all 0.4s ease-in-out;
		z-index: 99;
		border-radius: var(--border-radius);
		border-bottom-right-radius: 0;
		border-top-right-radius: 0;
		max-height: 66vh;
		height: fit-content;
		background-color: var(--bg);

		@media screen and (max-width: 1460px) {
			--nav-width: 220px;
			margin-left: 0.5rem;
		}
		@media screen and (max-width: 1200px) {
			--nav-width: 140px;
			margin-left: 0.5rem;
			margin-right: 0;
		}

		/* mobile */
		@media screen and (max-width: 750px) {
			position: fixed;
			right: -100%;
			padding-top: 0;
			padding: 0.51rem;
			top: calc(72px + 1rem);

			&.open {
				right: 0.5rem;
				right: -1rem;

				background-color: var(--color);

				overflow-y: scroll;

				nav a {
					color: white;

					&:hover,
					&.highlight {
						color: black;
					}
				}
			}
		}
	}

	nav {
		display: flex;
		flex-direction: column;
		/* position: fixed; */
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
