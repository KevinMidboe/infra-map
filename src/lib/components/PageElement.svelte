<script lang="ts">
	export let bgColor: string;
	export let color = 'black';
	export let title = '';
	export let description = '';
	export let header = '';
	export let link = '/';
	export let icon = '';
</script>

<a href={link} class="shortcut" style={`--bg: ${bgColor}; --color: ${color}`}>
	<span class="header">{header}</span>
	<i class="icon">{icon}</i>
	<h2>{title}</h2>

	<span class="description">{description}</span>
	<button>Utforsk</button>
</a>

<style lang="scss">
	.shortcut {
		aspect-ratio: 1.5 / 1;
		border-radius: 0.4rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		text-decoration: none;
		color: var(--color);
		background-color: var(--bg);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
		padding: 2rem 1.25rem;

		@media (min-width: 750px) {
			aspect-ratio: 1 / 1;
			padding: 2.5rem 1.875rem 3.125rem;

			.header {
				display: block !important;
			}
		}
		@media (min-width: 1200px) {
			padding: 3.125rem 3.75rem 3.75rem;
		}

		&:hover {
			transform: translateY(-4px) translateX(-4px);
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
			border-radius: 0.8rem;
		}

		.header {
			display: none;
		}

		.icon {
			font-size: 1.8rem;
		}

		h2 {
			font-size: 4.5rem;
			letter-spacing: 4.4px;
			font-family: 'Stop';
			margin: 0;
			flex: unset;
		}

		.description {
			text-align: center;
			line-height: 1.4;
		}

		button {
			display: inline-flex;
			flex: unset;
			color: var(--color);
			font-size: 1rem;
			border: 2px solid var(--color);
			border-radius: 4px;
			align-items: center;
			height: 48px;
			padding: 0 1.25rem;
			transition: all 0.3s ease;
		}

		&:hover button {
			color: var(--bg);
			background-color: var(--color);

			&::after {
				opacity: 1;
				position: absolute;
				top: 14px;
				left: calc(100% - 2rem);
			}

			// padding: 0 3rem;
			padding-right: 3rem;
		}

		button::after {
			position: absolute;
			transition: inherit;
			width: fit-content;
			left: 2rem;
			top: 12px;
			opacity: 0;
			content: '→';
		}
	}
</style>
