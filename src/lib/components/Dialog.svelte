<script lang="ts">
	import { onMount, onDestroy, createEventDispatcher } from 'svelte';
	import { clickOutside } from '$lib/utils/mouseEvents';

	export let title: string;
	export let description: string | null = null;

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			close();
		}
	}

	function handleClick(event: MouseEvent) {
		const element = document.getElementsByClassName('dialog')?.[0]?.children[0];

		if (clickOutside(event, element) === false) return;

		close();
	}

	onMount(() => {
		window.addEventListener('keydown', handleKeydown);
		setTimeout(() => window.addEventListener('click', handleClick), 100);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
		window.removeEventListener('click', handleClick);
	});
</script>

<div
	role="dialog"
	aria-labelledby="dialog-title"
	aria-describedby="dialog-description"
	class="dialog"
>
	<div tabindex="-1" id="dialog-title" class="title">
		<header>
			<button on:click={close} aria-disabled="false" aria-label="Close" type="button" tabindex="0"
				><svg viewBox="0 0 24 24" aria-hidden="true" tabindex="-1" height="100%" width="100%"
					><path
						d="M6.909 5.636a.9.9 0 1 0-1.273 1.273l5.091 5.09-5.091 5.092a.9.9 0 0 0 1.273 1.273L12 13.273l5.091 5.09a.9.9 0 1 0 1.273-1.272L13.273 12l5.09-5.091a.9.9 0 1 0-1.272-1.273L12 10.727z"
					></path></svg
				>
			</button>
			<h5>{title}</h5>
		</header>

		<main>
			<div id="dialog-description">
				{#if description}
					{@html description}
				{/if}
			</div>

			<!--
			<div class="alerts">
				<Success>There are no applications created yet.</Success>
				<Warning>There are no applications created yet.</Warning>
				<Error>There are no applications created yet.</Error>
			</div>
			-->

			<div>
				<slot></slot>
			</div>
		</main>
	</div>
</div>

<style lang="scss">
	:global(.alerts > *) {
		margin-bottom: 0.5rem;
	}

	.dialog {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 2006;
		width: 100%;
		pointer-events: all;
		background-color: #7d666580;
		transition:
			opacity 0.4s ease,
			visibility 0.4s ease;
		visibility: visible;
		opacity: 1;
		align-items: center;

		> div {
			max-width: 880px;
			max-width: unset;
		}
	}

	.title {
		--padding: 1rem;
		position: relative;
		background-color: #ffffff;
		background-clip: padding-box;
		border-radius: 12px;
		display: flex;
		flex-direction: column;
		border: 0;
		opacity: 0;
		transform: translate(0, 2rem);
		transition:
			transform 0.4s ease,
			opacity 0.4s ease;
		box-shadow:
			0 3px 6px -4px rgba(0, 0, 0, 0.12),
			0 6px 16px 0 rgba(0, 0, 0, 0.08),
			0 9px 28px 8px rgba(0, 0, 0, 0.05);
		pointer-events: auto;
		max-height: 90vh;
		padding: var(--padding);
		width: calc(880px - calc(--padding * 2));
		z-index: 2008;
		max-width: 100%;
		visibility: visible;
		opacity: 1;
		transform: translate(0, 0);

		header {
			padding: 24px;
			padding: 24px 16px;
			flex: 0 0 auto;
			flex-direction: row-reverse;
			display: flex;
			align-items: center;

			button {
				flex: unset;
				border: none;
				padding: 0;
				position: relative;
				background: transparent;
				height: 1.5rem;
				width: 1.5rem;
				border-radius: 8px;
				display: inline-block;
				text-decoration: none;
				fill: orange;
				fill: #0a0a0a;
			}

			h5 {
				margin: 0 auto 0 0;
				font-size: 1.4rem;
				font-weight: 400;
			}
		}

		main #dialog-description {
			padding-bottom: 1rem;
		}

		main > * {
			padding-top: 1rem;
			padding-top: 0rem;
		}
	}
</style>
