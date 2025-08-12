<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
</script>

<div class="page">
	<Header />

	<div class="content">
		<Sidebar />

		<main>
			<slot></slot>
		</main>
	</div>
</div>

<style lang="scss">
	.page {
		display: flex;
		flex-direction: column;
		max-width: 1440px;
		margin: 0 auto;
	}

	.content {
		display: flex;
		padding-top: 1.3rem;
		padding-bottom: 3rem;

		main {
			/* mobile: 1rem */
			--margin: 2rem;
			margin: var(--margin);
			width: calc(100% - var(--margin) * 2);
		}

		@media screen and (max-width: 750px) {
			main {
				--margin: 1rem;
			}

			:global(> .nav-wrapper) {
				display: none;
			}
		}
	}
</style>
