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

	function openElement(link: string) {
		if (String(link)?.startsWith('/')) {
			goto(link);
		} else {
			window.open(link, '_blank');
		}
	}

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

				openElement(link);
			}
		});
	}

	onMount(() => {
		registerShortcutKey();
	});
</script>

{#if open}
	<Dialog on:close={() => (open = false)} title="" description="">
		<div class={className}>
			<Input label="" bind:value={filterString} placeholder="Search anything..." />

			<ul>
				{#each filteredchildren as element, index (element)}
					<li
						class={index === focusIndex ? 'focus' : ''}
						on:click={() => openElement(element?.link) ?? '/'}
					>
						<div class="header">
							<h3>{element?.name}</h3>
							<span class="sub">{element?.link}</span>
						</div>

						<div class="group">
							{#each Object.entries(element) as [key, value] (key)}
								<span><b>{key}:</b> {value}</span>
							{/each}
						</div>
					</li>
				{/each}
			</ul>

			<div class="hint">
				Press <span class="kbd">Esc</span> to close · <span class="kbd">⌘</span> +
				<span class="kbd">K</span> to toggle
			</div>
		</div>
	</Dialog>
{/if}

<style lang="scss">
	:global(.dialog .title) {
		--padding: 1.2rem;
		--background-color: rgba(255, 255, 255, 0.92);
		--text-color: black;
	}

	:global(body.dark .dialog .title) {
		--background-color: rgba(25, 25, 34, 0.92);
		--text-color: white;
	}

	:global(.dialog .title .input) {
		--padding-w: 1rem;
	}

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
			margin: 0;
			margin-top: 0.3rem;
			padding-left: 0;
			overflow-y: scroll;
			overflow-y: scroll;
			max-height: calc(100vh - var(--offset-top) * 4);
			max-height: 75vh;
		}

		li {
			--blur: 18px;
			border: var(--border);
			border-radius: var(--border-radius);

			position: relative;
			display: flex;
			flex-direction: column;
			transition: background 0.15s;
			padding: 0.875rem 1rem;
			margin: 0.5rem 0;
			background-color: var(--card-bg);

			cursor: pointer;
			user-select: none;
			gap: 0.375rem;

			&.focus,
			&:hover {
				&::after {
					content: '';
					position: absolute;
					width: calc(100% - 4px);
					height: calc(100% - 2px);
					border: 2px solid var(--theme);
					top: -1px;
					left: -1px;
					border-radius: var(--border-radius);
				}
			}

			.header {
				display: flex;
				justify-content: space-between;
				align-items: baseline;
				margin-bottom: 0.5rem;

				h3 {
					font-weight: 600;
					font-size: 1.1rem;
					letter-spacing: 0.2px;
					margin: 0;
				}

				.sub {
					color: #999;
					font-size: 13px;
					font-family: monospace;
				}
			}

			.group {
				display: flex;
				flex-wrap: wrap;
				gap: 0.625rem 1.125rem;
				margin-top: 0.25rem;
				font-size: 0.8rem;
				font-size: 13px;
				color: var(--muted);

				span {
					display: inline-flex;
					gap: 4px;

					b {
						color: var(--key);
						font-weight: 400;
					}
				}
			}
		}

		/* Small footer hint */
		.hint {
			margin-top: 10px;
			text-align: right;
			color: var(--muted);
			font-size: 13px;

			.kbd {
				background-color: rgba(0, 0, 0, 0.16);
				padding: 2px 6px;
				border-radius: 4px;
				font-size: 12px;
			}
		}
	}

	:global(.search-container .label-input) {
		position: sticky;
		top: 0;
		overflow: unset;
	}
</style>
