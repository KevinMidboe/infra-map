<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Input from '$lib/components/Input.svelte';
	import ColorInput from '$lib/components/ColorInput.svelte';
	import Id from '$lib/icons/id.svelte';
	import TextColor from '$lib/icons/text-color.svelte';
	import TextSize from '$lib/icons/text-size.svelte';
	import Window from '$lib/icons/window.svelte';
	import Quill from '$lib/icons/quill.svelte';
	import Tag from '$lib/icons/tag.svelte';
	import Link from '$lib/icons/link.svelte';
	import PaintRoller from '$lib/icons/paint-roller.svelte';
	import Bucket from '$lib/icons/bucket.svelte';
	import Picture from '$lib/icons/picture.svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');
</script>

<form method="POST">
	<div class="wrapper">
		<Input label="Name" icon={TextSize} placeholder="Website name" required />
		<Input label="Link" icon={Link} placeholder="https://site.tld" required />
		<Input label="Image" icon={Picture} placeholder="/images/site.png" required />
		<ColorInput label="Color" icon={PaintRoller} placeholder="#21ADF6" required />
		<ColorInput label="Background" icon={Bucket} />
	</div>

	<footer>
		<button on:click={close} aria-disabled="false" type="button" tabindex="0"
			><span tabindex="-1">Cancel</span></button
		>
		<button class="affirmative" type="submit" tabindex="-1">
			<span tabindex="-1">Add connection</span>
		</button>
	</footer>
</form>

<style lang="scss">
	form {
		.wrapper {
			display: flex;
			flex-direction: column;
		}

		footer {
			padding: 0.75rem 1.5rem;
			max-width: 100%;
			height: 2.5rem;
			width: auto;
			display: flex;
			justify-content: flex-end;
			flex: 0 0 auto;
			gap: 1rem;
			flex-wrap: wrap;

			button {
				flex: unset;

				span {
					font-size: 0.8rem;
				}
			}
		}
	}

	:global(form .wrapper div) {
		margin-bottom: 0.5rem;
	}
</style>

