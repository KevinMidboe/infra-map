<script lang="ts">
	import { goto, pushState } from '$app/navigation';
	import { onMount } from 'svelte';
	import Dialog from './Dialog.svelte';
	import Input from './Input.svelte';

	let open = $state(false);
	const className = 'search-container';

	/* search & filter */
	let filterString = $state('');
	let focusIndex = $state(0);
	let children = $state([]);

	let filteredchildren = $derived.by(() => {
		return children.filter((a) => a?.name.toLowerCase().includes(filterString));
	});

	const updateFocus = (index: number) => {
		if (index < 0) index = 0;
		else if (index >= filteredchildren.length) {
			index = filteredchildren.length - 1;
		}

		focusIndex = index;
	};

	/* setup & register */
	const toggleSearchDialog = () => (open = !open);
	const focusSearchInput = () => {
		setTimeout(() => {
			const input = document.getElementsByClassName(className)[0]?.getElementsByTagName('input')[0];

			input.focus();
		}, 50);
	};

	function registerShortcutKey() {
		document.addEventListener('keydown', function (event) {
			// listen for open/close command + k
			if ((event.metaKey && event.key === 'k') || (event.ctrlKey && event.key === 'k')) {
				event.preventDefault();
				console.log('Command + K / Ctrl + K was pressed');

				toggleSearchDialog();

				// initial state
				if (open) {
					focusSearchInput();
					filterString = '';
					updateFocus(0);
					children = window?.elements || [{ name: 'empty' }];
				}
				return;
			}

			// listen for text, any letter should reset focusIndex
			const singleLetter = (event.key.length == 1 && event.key.match(/\D/)) || 0 > 0;
			if (open && singleLetter) {
				updateFocus(0);
			}

			// listen for number as shortcut actions
			const digit = event.key.match(/\d/)?.[0];
			if (open && digit?.length && digit?.length > 0) {
				setTimeout(() => {
					filterString = String(filterString)?.replaceAll(digit, '');
				}, 1);

				updateFocus(Number(digit) - 1);
			}

			// listen for arrow keys
			if (open && (event.key === 'ArrowUp' || event.key === 'ArrowDown')) {
				const direction = event.key === 'ArrowDown' ? 1 : -1;
				updateFocus(focusIndex + 1 * direction);
			}

			// listen for enter key
			if (open && event.key === 'Enter' && filteredchildren.length > 0) {
				const { link } = filteredchildren[focusIndex];
				toggleSearchDialog();

				if (String(link)?.startsWith('/')) {
					goto(link);
				} else {
					window.open(link, '_blank');
				}
			}
		});
	}

	onMount(() => {
		registerShortcutKey();
	});
</script>

{#if open}
	<Dialog on:close={() => (open = false)} title="Search on page" description="">
		<div class={className}>
			<Input label="" bind:value={filterString} placeholder="attribute" />

			<ul>
				{#each filteredchildren as element, index (element)}
					<li class={index === focusIndex ? 'focus' : ''}>
						<h3>{element?.name}</h3>

						<div>
							{#each Object.entries(element) as [key, value] (key)}
								<span><b>{key}:</b> {value}</span>
							{/each}
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</Dialog>
{/if}

<style lang="scss">
	.search-container {
		width: 700px;
		position: relative;

		@media screen and (max-width: 480px) {
			width: 100%;

			ul {
				max-height: calc(50vh);
			}
		}

		ul {
			list-style-type: none;
			padding-left: 0;
			overflow-y: scroll;
			overflow-y: scroll;
			max-height: calc(100vh - var(--offset-top) * 4);
			max-height: 75vh;
		}

		li {
			border: var(--border);
			border-radius: var(--border-radius);
			padding: 1rem;
			margin: 0.5rem 0;
			position: relative;
			cursor: pointer;

			&.focus,
			&:hover {
				&::after {
					content: '';
					position: absolute;
					width: calc(100% - 2px);
					height: calc(100% - 2px);
					border: 2px solid var(--theme);
					top: -1px;
					left: -1px;
					border-radius: var(--border-radius);
				}
			}

			h3 {
				margin: 0;
				text-align: center;
				font-size: 2rem;
			}

			div {
				margin-top: 0.5rem;
				display: flex;
				flex-wrap: wrap;
				column-gap: 1rem;
				row-gap: 0.1rem;
			}
		}
	}

	:global(.search-container .label-input) {
		position: sticky;
		top: 0;
		overflow: unset;
	}
</style>
