<script lang="ts">
	import { JsonView } from '@zerodevx/svelte-json-view';

	export let json: any;
</script>

<div class="parent">
	<div class="code">
		<JsonView {json} />
	</div>
</div>

<style lang="scss">
	.parent {
		margin-bottom: 2rem;
	}

	.code {
		background-color: var(--color);
		max-height: calc(90vh - 10rem);
		color: white;
		border-radius: var(--border-radius, 1rem);
		padding: 1rem;
		overflow: scroll;

		--jsonBorderLeft: 1px dotted var(--highlight);
		--jsonKeyColor: #87afff;
		--jsonValStringColor: #afaf87;
		--jsonValBooleanColor: #ff8787;
		--jsonValNumberColor: #5fd787;
	}
</style>
