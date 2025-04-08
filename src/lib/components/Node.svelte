<script lang="ts">
	import Connection from '$lib/icons/connection.svelte';
	import Network from '$lib/icons/network.svelte';
	import Layers from '$lib/icons/layers.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import { convertKiToHumanReadable } from '$lib/utils/conversion';

	export let node;

	let { metadata, pods, status } = node;
</script>

<div class="card">
	<div class="header">
		<div class="icon"><Connection /></div>
		<span class="name">{metadata.name}</span>

		<!--
		<span class={`status ${node?.online === 1 ? 'ok' : 'error'}`}></span>
		-->
	</div>

	<div class="resource">
		<div class="title">
			<Network />
			<span>Status</span>
		</div>
		<span>{status.phase}</span>

		<div class="title">
			<Network />
			<span>IP address</span>
		</div>
		<span>{status.addresses[0].address}</span>

		<div class="title">
			<Layers />
			<span>Pods</span>
		</div>
		<span>{pods.length}</span>

		<div class="title">
			<Connection />
			<span>CPUs allocated</span>
		</div>
		<span>{status.capacity.cpu}</span>

		<div class="title">
			<Clock />
			<span>Memory allocaed</span>
		</div>
		<span>{convertKiToHumanReadable(status.capacity.memory)}</span>
		<!--
		<span>{uptime}</span>

		<Lifecycle {conditions} />
		-->
	</div>

	<!--
	<div class="footer">
		{#each buttons as btn (btn)}
			<button on:click={() => console.log(node)}>
				<span>{btn}</span>
			</button>
		{/each}
	</div>
	-->
</div>

<style lang="scss">
	.card {
		flex-grow: 1;
		max-width: 550px;

		background: #fbf6f4;
		box-shadow: var(
			--str-shadow-s,
			0px 0px 2px #22242714,
			0px 1px 4px #2224271f,
			0px 4px 8px #22242729
		);
		pointer-events: all;
		cursor: auto;
	}

	.header {
		display: flex;
		padding: 0.75rem;
		background-color: white;
		align-items: center;
		font-size: 16px;

		.icon {
			height: 24px;
			width: 24px;
			margin-right: 0.75rem;
		}

		.status {
			height: 1rem;
			width: 1rem;
			border-radius: 50%;
			margin-left: auto;
			position: relative;

			&.ok {
				background-color: var(--positive);
			}
			&.warning {
				background-color: var(--warning);
			}
			&.error {
				background-color: var(--negative);
			}
		}
	}

	.footer {
		padding: 0.5rem;
		background-color: white;
	}

	.resource {
		display: grid;
		grid-template-columns: auto auto;
		padding: 0.5rem;
		background-color: var(--bg);

		row-gap: 6px;
		column-gap: 20px;

		> div,
		span {
			display: flex;
			padding: 0 0.5rem;
		}
	}

	:global(.resource .title svg) {
		height: 1rem;
		width: 1rem;
	}

	.footer {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 0.5rem;

		margin-top: auto;
		background: white;
		padding: 0.5rem;
		border-bottom-left-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;

		button {
			border: none;
			position: relative;
			background: transparent;
			height: unset;
			border-radius: 0.5rem;
			display: inline-block;
			text-decoration: none;
			padding: 0 0.5rem;
			flex: 1;

			span {
				display: inline-flex;
				align-items: center;
				justify-content: center;
				width: 100%;
				height: 1.5rem;
				padding: 0 0.5rem;
				margin-left: -0.5rem;
				border: 1px solid #eaddd5;
				border-radius: inherit;
				white-space: nowrap;
				cursor: pointer;
				font-weight: 700;
			}

			&::after {
				content: '';
				position: absolute;
				right: 0;
				top: 0;
				border-radius: 0.5rem;
				width: 100%;
				height: 100%;
				transition: transform 0.1s ease;
				will-change: box-shadow 0.25s;
				pointer-events: none;
			}
		}
	}

	.positive {
		color: #077c35;
	}
</style>
