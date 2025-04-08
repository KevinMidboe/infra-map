<script lang="ts">
	import { getContext } from 'svelte';
	import { fly, scale, slide, crossfade } from 'svelte/transition';
	import { TABS } from './Tabs.svelte';

	const panel = {
		id: Math.random() * 100
	};
	const { registerPanel, selectedPanel } = getContext(TABS);

	registerPanel(panel);

	const [send, receive] = crossfade({ duration: 800 });
</script>

{#if $selectedPanel === panel}
	<div in:fly={{ x: 200, duration: 500 }} out:fly={{ x: -50, duration: 300 }}>
		<!-- <div in:send="{{key: panel}}" out:receive="{{key: panel}}"> -->
		<slot></slot>
	</div>
{/if}

<style lang="scss">
	div {
		position: absolute;
		top: calc(3.25rem);
		width: 100%;
	}
</style>
