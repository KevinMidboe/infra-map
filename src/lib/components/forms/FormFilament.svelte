<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Input from '$lib/components/Input.svelte';
	import ColorInput from '$lib/components/ColorInput.svelte';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Flower from '$lib/icons/flower.svelte';
	import Weight from '$lib/icons/weight.svelte';
	import Link from '$lib/icons/link.svelte';
	import PencilRuler from '$lib/icons/pencil-ruler.svelte';

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	const materialOptions = ['PLA Matte', 'PLA Basic', 'PLA-CF', 'PET-G'];
	const weightOptions = ['0.5 kg', '1 kg', '2 kg'];
	let process = $state('');
	let port = $state('');
</script>

<form method="POST" action="/printer/filament">
	<div class="wrapper">
		<ColorInput label="Hex" required />
		<Input label="Color name" icon={Flower} placeholder="Infinity orange" required />
		<Dropdown
			placeholder="Plastic material name"
			label="Material"
			required={true}
			icon={PencilRuler}
			options={materialOptions}
		/>
		<Dropdown
			placeholder="Spool weight"
			label="Weight"
			icon={Weight}
			required={true}
			options={weightOptions}
		/>
		<Input label="Link" icon={Link} placeholder="https://store.shop/item" required />
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
