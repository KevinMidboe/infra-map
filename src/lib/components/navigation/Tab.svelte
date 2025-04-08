<script>
	import { getContext } from 'svelte';
	import { TABS } from './Tabs.svelte';

	const tab = {};
	const { registerTab, selectTab, selectedTab } = getContext(TABS);

	registerTab(tab);
</script>

<div class="tab">
	<button class:selected={$selectedTab === tab} on:click={() => selectTab(tab)}>
		<slot></slot>
	</button>
</div>

<style lang="scss">
	button {
		background: none;
		border: none;
		border-bottom: 2px solid transparent;
		border-radius: 0;
		margin: 0;
		letter-spacing: 0.2px;

		&.selected {
			opacity: 1;
			letter-spacing: unset;
			border-bottom-color: var(--color) !important;
			font-weight: 600 !important;
		}
	}

	.tab {
		&:not(&:first-of-type) {
			margin-left: 0.75rem;
		}

		button {
			font-size: 1.1rem;
			font-weight: 500;
			cursor: pointer;
			border-bottom: 2px solid transparent;
			opacity: 0.7;
			padding-bottom: 0.3rem;
			transition: 0.3s ease-in-out all;
		}
	}
</style>
