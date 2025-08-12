<div type="warning" class="warning">
	<div>
		<slot></slot>
	</div>
</div>

<style lang="scss">
	.warning {
		display: flex;
		border-radius: 0.5rem;
		color: #091d14;
		background: linear-gradient(90deg, #02a73a 4px, #62fe67 4px);

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
