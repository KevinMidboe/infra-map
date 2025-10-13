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
	@import "../styles/card.scss";
</style>
