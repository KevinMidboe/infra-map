<script lang="ts">
	export let label: string;
	export let value: string;
	export let placeholder: string;
	export let required = false;
	export let icon: unknown;

	let focus = false;
</script>

<div class="label-input">
	{#if label?.length > 0}
		<label for={label}>{label}</label>
	{/if}

	<div class="input" class:focus>
		{#if icon}
			<i class="icon">
				<svelte:component this={icon} />
			</i>
		{/if}

		<input
			id={label}
			{placeholder}
			name={label}
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

		.input i {
			display: block;
			--icon-size: 1.2rem;
			height: var(--icon-size);
			width: var(--icon-size);
			fill: #4c4243;
			padding-right: 0.25rem;
		}

		.input {
			position: relative;
			display: flex;
			--padding: 0.75rem;
			width: calc(100% - (var(--padding) * 2));
			height: 2.5rem;
			background: #ffffff;
			align-items: center;
			gap: 0.5rem;
			border: 1px solid #a68b85;
			border-radius: 0.5rem;
			transition: all 0.3s;
			outline: none;
			display: flex;
			align-items: center;
			padding: 0px var(--padding);

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
			width: 100%;
			height: 100%;
			border: none;
			outline: none;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
