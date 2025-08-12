<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import Input from '$lib/components/Input.svelte';
	import { clickOutside } from '$lib/utils/mouseEvents';

	export let options = ['Today', 'Yesterday', 'Last 7 Days', 'Last 30 Days', 'All time'];
	export let selected;
	export let placeholder = '';
	export let label = '';
	export let icon = undefined;
	export let required = false;

	let dropdown: Element;
	let open = false;
	const dispatch = createEventDispatcher();

	function select(option: string) {
		selected = option;
		open = false;

		dispatch('value', option);
	}

	function handleEnter(event: KeyboardEvent): boolean {
		if (!(event.code === 'Enter' || event.code === 'Space')) return false;

		event.preventDefault();
		return true;
	}

	function handleClick(event: MouseEvent) {
		console.log('dropdown element:', dropdown);
		const outside = clickOutside(event, dropdown);
		console.log('click outside:', outside);
		if (outside === false) {
			return;
		}

		open = false;
	}

	onMount(() => {
		window.addEventListener('click', handleClick);
	});

	onDestroy(() => {
		window.removeEventListener('click', handleClick);
	});
</script>

<div class="dropdown" bind:this={dropdown}>
	<span role="button" class="trigger" on:click={() => (open = !open)}>
		<Input
			{icon}
			{placeholder}
			{label}
			value={selected}
			{required}
			on:blur={() => (open = false)}
		/>
	</span>

	{#if open}
		<ul class="menu">
			{#each options as option (option)}
				<li>
					<span
						tabindex="0"
						class:active={selected === option}
						on:click={() => select(option)}
						on:keydown={(event) => handleEnter(event) && select(option)}
						role="button">{option}</span
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
	.dropdown {
		position: relative;
	}
	.arrow {
		margin-left: auto;
	}
	.menu {
		position: absolute;
		top: 100%;
		left: 0;
		background: var(--bg);
		color: var(--color);
		border-radius: 6px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		width: 100%;
		z-index: 10;
		list-style: none;
		margin: 0.2rem 0 0 0;
		padding: 0;
		overflow: hidden;
	}
	.menu li span {
		display: block;
		width: 100%;
		padding: 10px;
		cursor: pointer;
	}
	.menu li span:hover,
	.menu li span:active {
		background: #333;
		background: var(--color);
		color: var(--bg);
	}
</style>
