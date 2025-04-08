<script lang="ts">
	export let title: string;
	export let description: string;
</script>

<article class="main-container">
	<div class="header">
		<h2>{title}</h2>
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
	}
</style>
