<div type="error" class="negative">
	<div>
		<slot></slot>
	</div>
</div>

<style lang="scss">
	.negative {
		display: flex;
		border-radius: 0.5rem;
		color: #1c1819;
		background: linear-gradient(90deg, #ff5449 4px, #fed8d0 4px);

		> div {
			font-size: 1rem;
			font-weight: 400;
			padding: 1rem 1.25rem;
			display: flex;
			align-items: flex-start;
			flex: 1;
		}
	}
</style>
