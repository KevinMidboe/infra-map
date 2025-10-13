<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import TextSize from '$lib/icons/text-size.svelte';
	import Quill from '$lib/icons/quill.svelte';
	import Tag from '$lib/icons/tag.svelte';
	import Dropdown from '../Dropdown.svelte';

	const { close }: { close: () => void } = $props();

	const dnsTypes = ['A', 'AAAA', 'CNAME', 'NS', 'SOA', 'MX', 'TXT', 'PTR'];
</script>

<form method="POST">
	<div class="wrapper">
		<Input label="Name" icon={TextSize} placeholder="Website name" required />
		<Dropdown
			placeholder="Record type"
			label="Type"
			required={true}
			icon={Tag}
			options={dnsTypes}
		/>
		<Input label="Content" icon={Quill} placeholder="IPv4 address" required />
	</div>

	<footer>
		<button on:click={close} aria-disabled="false" type="button" tabindex="0"
			><span tabindex="-1">Cancel</span></button
		>
		<button class="affirmative" type="submit" tabindex="-1">
			<span tabindex="-1">Add record</span>
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
