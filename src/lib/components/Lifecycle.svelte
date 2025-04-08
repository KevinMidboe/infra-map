<script lang="ts">
	export let conditions: any;

	const dict = {
		Initialized: 'Initialized',
		PodScheduled: 'Scheduled',
		Ready: 'Ready',
		ContainersReady: 'AllReady'
	};
</script>

<div class="lifecycle-container">
	{#each conditions as condition (condition)}
		<div class="step" title={`Date: ${condition.lastTransitionTime}`}>
			<span class="type">{dict[condition.type]}</span>
			<span class="status">{condition.status === 'True' ? 'yes' : 'no'}</span>
		</div>
		<span class="divider"></span>
	{/each}
</div>

<style lang="scss">
	.lifecycle-container {
		display: flex;
		justify-content: space-between;
		width: calc(100% - 1.5rem);
		padding: 0.75rem;
	}

	.divider:not(:last-of-type) {
		height: 10px;
		width: 100%;
		top: 2rem;
		margin-top: auto;
		margin-bottom: 0.5rem;
		background-color: var(--positive);
		opacity: 0.6;
		/*background-color: #0A7C35;*/
	}

	.step {
		display: flex;
		flex-direction: column;
		position: relative;

		.type {
			margin-bottom: 0.3rem;
			font-weight: 500;
		}

		.status {
			background-color: var(--positive);
			opacity: 0.6;
			/*background-color: #0a7c35;*/
			border-radius: 0.4rem;
			padding: 0.2rem;
			padding-bottom: 0.3rem;
			text-align: center;
			font-weight: 300;
			position: relative;
		}
	}
</style>
