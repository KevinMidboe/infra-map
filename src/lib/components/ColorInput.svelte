<script lang="ts">
	export let label: string;
	export let value = '#000000';
	export let placeholder: string | null = null;
	export let required = false;
	export let icon: unknown = null;

	let focus = false;
</script>

<div class="label-input">
	{#if label?.length > 0}
		<label for={label}>{label}</label>
	{/if}

	<div class="input" class:focus style={`--bg: ${value}`}>
		<div class="color-preview"></div>

		<input
			id={label}
			{placeholder}
			name={label}
			style={`background-color: ${value}30`}
			bind:value
			{required}
			on:focus={() => (focus = true)}
			on:blur={() => (focus = false)}
		/>
	</div>
</div>

<style lang="scss">
	.label-input {
		width: 100%;

		label {
			display: block;
			font-weight: 500;
			margin-bottom: 0.25rem;
		}

		.color-preview {
			width: 100%;
			height: 100%;
			margin: 0;
			background-color: var(--bg);
			border-radius: inherit;
			border-bottom-left-radius: unset;
			border-bottom-right-radius: unset;
		}

		.input {
			position: relative;
			display: flex;
			height: 4rem;
			flex-direction: column;
			align-items: center;
			border: 1px solid #a68b85;
			border-color: var(--bg);
			border-radius: 0.5rem;
			transition: all 0.3s;
			outline: none;

			&.focus {
				box-shadow: 0px 0px 0px 4px #7d66654d;
			}
		}

		input {
			touch-action: manipulation;
			background: transparent;
			color: var(--color);
			font-size: 1rem;
			font-weight: 400;
			--padding: 1rem;
			width: calc(100% - var(--padding));
			padding-left: var(--padding);
			height: 100%;
			border: none;
			outline: none;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			border-bottom-left-radius: inherit;
			border-bottom-right-radius: inherit;
		}
	}
</style>
