<script lang="ts">
	import External from '$lib/icons/external.svelte';

	interface Site {
		title: string;
		image: string;
		link: string;
		background?: string;
		color?: string;
	}

	let { title, image, background, color, link }: Site = $props();

	let colors = [
		['#401C26', '#f6cfdd'],
		['#213726', '#BDCBB2'],
		['#EED7CD', '#262221'],
		['#262221', '#F3BFA2'],
		['#f6cfdd', '#401C26'],
		['#BDCBB2', '#213726'],
		['#FF8FAB', '#401C26'],
		['#9381FF', '#262221']
	];

	if (!background && !color) {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];
		background = randomColor[0];
		color = randomColor[1];
	}
</script>

<a
	href={link}
	style={`--background: ${background}; --color: ${color}`}
	target="_blank"
	rel="noopener noreferrer"
>
	<div class="image" style={`background-image: url("${image}")`}></div>
	<hr />

	<div class="title">
		<h2>
			{title || 'Grafana'}
			<span class="link"><External /></span>
		</h2>
	</div>
</a>

<style lang="scss">
	a {
		border-radius: 0.8rem;
		color: white;
		text-align: justify;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
		cursor: pointer;
		background-color: var(--background);
		color: var(--color);

		&,
		h2,
		.link,
		.title {
			transition: all 0.2s ease-in-out;
		}

		.title {
			h2 {
				position: relative;
				width: fit-content;
				margin: 1.2rem auto;
				font-size: 2rem;
				justify-content: center;
				text-transform: lowercase;
				font-weight: 300;
				letter-spacing: 2px;
				font-style: italic;
			}
		}

		hr {
			margin: unset;
			border: none;
			width: 96%;
			margin-left: 2%;
			height: 1px;
			background-color: var(--color);
			opacity: 0.3;
		}

		.image {
			height: 8rem;
			width: 100%;
			margin: 1.2rem 0;
			background-size: contain;
			background-repeat: no-repeat;
			background-position: center;
		}

		.link {
			position: absolute;
			transition: inherit;
			width: fit-content;
			width: 1.5rem;
			height: 1.5rem;
			left: calc(100% - 2rem);
			top: 0;
			opacity: 0;
		}

		@media screen and (max-width: 750px) {
			.title h2 {
				padding: 0.6rem;
				font-size: 1.2rem;
			}

			.image {
				height: 5rem;
			}
		}

		&:hover {
			transform: translateY(-4px) translateX(-4px);
			box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
			border-radius: 0.8rem;

			.title h2 {
				padding-right: 2rem;

				.link {
					opacity: 1;
					left: calc(100% - 1rem);
					fill: var(--color);
				}
			}
		}
	}
</style>
