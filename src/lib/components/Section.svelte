<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<article class="main-container">
	<div class="header">
		<div class="title">
			<h2>{title}</h2>
			<slot name="top-left" />
		</div>
		<label>{description}</label>
	</div>

	<slot></slot>
</article>

<style lang="scss">
	article {
		position: relative;
		display: flex;
		flex-direction: column;
		flex-wrap: unset;
		display: flex;
		gap: 1rem;
	}

	.header {
		display: flex;
		flex-direction: column;

		.title {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
