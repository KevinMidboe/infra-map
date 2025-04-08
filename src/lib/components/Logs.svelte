<script lang="ts">
	const logs1 = `+ yarn build
yarn run v1.22.22
$ vite build
▲ [WARNING] Cannot find base config file "./.svelte-kit/tsconfig.json" [tsconfig.json]

    tsconfig.json:2:12:
      2 │   "extends": "./.svelte-kit/tsconfig.json",
        ╵              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


vite v4.4.7 building SSR bundle for production...
transforming...
"swipe" is imported from external module "svelte-gestures" but never used in "src/lib/components/Modal.svelte".
✓ 139 modules transformed.
rendering chunks...

vite v4.4.7 building for production...
transforming...
✓ 136 modules transformed.
rendering chunks...
computing gzip size...
.svelte-kit/output/client/_app/version.json                                  0.03 kB │ gzip:  0.05 kB
.svelte-kit/output/client/vite-manifest.json                                 6.06 kB │ gzip:  0.82 kB
.svelte-kit/output/client/_app/immutable/assets/2.797db896.css               0.56 kB │ gzip:  0.21 kB
.svelte-kit/output/client/_app/immutable/assets/LowBattery.3e0e6805.css      1.34 kB │ gzip:  0.50 kB
.svelte-kit/output/client/_app/immutable/assets/0.4ae3ad4f.css               1.40 kB │ gzip:  0.54 kB
.svelte-kit/output/client/_app/immutable/assets/4.d8e69ad3.css               3.84 kB │ gzip:  0.99 kB
.svelte-kit/output/client/_app/immutable/assets/Graph.833c02c6.css           6.60 kB │ gzip:  1.42 kB
.svelte-kit/output/client/_app/immutable/chunks/each.e59479a4.js             0.09 kB │ gzip:  0.10 kB
.svelte-kit/output/client/_app/immutable/chunks/store.9bf92701.js            0.19 kB │ gzip:  0.16 kB
.svelte-kit/output/client/_app/immutable/chunks/stores.458b7cfe.js           0.24 kB │ gzip:  0.17 kB
.svelte-kit/output/client/_app/immutable/nodes/5.f2fe2a9e.js                 0.44 kB │ gzip:  0.32 kB
.svelte-kit/output/client/_app/immutable/nodes/1.03b18b61.js                 0.84 kB │ gzip:  0.52 kB
.svelte-kit/output/client/_app/immutable/chunks/index.4b915d9e.js            0.93 kB │ gzip:  0.58 kB
.svelte-kit/output/client/_app/immutable/nodes/3.60efb886.js                 1.89 kB │ gzip:  0.89 kB
.svelte-kit/output/client/_app/immutable/chunks/index.e50902ae.js            2.29 kB │ gzip:  1.20 kB
.svelte-kit/output/client/_app/immutable/chunks/singletons.69e9afd3.js       2.46 kB │ gzip:  1.26 kB
.svelte-kit/output/client/_app/immutable/chunks/hive.5645a370.js             4.68 kB │ gzip:  2.37 kB
.svelte-kit/output/client/_app/immutable/chunks/scheduler.d05fc3de.js        6.27 kB │ gzip:  2.52 kB
.svelte-kit/output/client/_app/immutable/entry/app.566aae85.js               7.82 kB │ gzip:  2.59 kB
.svelte-kit/output/client/_app/immutable/chunks/WeightChanged.86ed6639.js    9.66 kB │ gzip:  3.58 kB
.svelte-kit/output/client/_app/immutable/nodes/4.9e87f003.js                12.31 kB │ gzip:  4.21 kB
.svelte-kit/output/client/_app/immutable/nodes/0.0875ba29.js                16.68 kB │ gzip:  6.97 kB
.svelte-kit/output/client/_app/immutable/chunks/LowBattery.ced8ef00.js      18.26 kB │ gzip:  5.97 kB
.svelte-kit/output/client/_app/immutable/entry/start.cf058992.js            24.06 kB │ gzip:  9.55 kB
.svelte-kit/output/client/_app/immutable/nodes/2.02031f29.js                24.52 kB │ gzip:  7.00 kB
.svelte-kit/output/client/_app/immutable/chunks/Graph.ed26d13c.js          238.67 kB │ gzip: 81.35 kB
✓ built in 4.13s
.svelte-kit/output/server/vite-manifest.json                              3.81 kB
.svelte-kit/output/server/_app/immutable/assets/_page.797db896.css        0.56 kB
.svelte-kit/output/server/_app/immutable/assets/LowBattery.3e0e6805.css   1.34 kB
.svelte-kit/output/server/_app/immutable/assets/_layout.4ae3ad4f.css      1.40 kB
.svelte-kit/output/server/_app/immutable/assets/_page.d8e69ad3.css        3.84 kB
.svelte-kit/output/server/_app/immutable/assets/Graph.d70e5aa3.css        6.58 kB
.svelte-kit/output/server/internal.js                                     0.19 kB
.svelte-kit/output/server/chunks/store.js                                 0.19 kB
.svelte-kit/output/server/entries/pages/settings/_page.svelte.js          0.26 kB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js               0.47 kB
.svelte-kit/output/server/chunks/stores.js                                0.52 kB
.svelte-kit/output/server/entries/pages/alarms/_page.svelte.js            1.14 kB
.svelte-kit/output/server/chunks/index.js                                 2.58 kB
.svelte-kit/output/server/chunks/hive.js                                  4.23 kB
.svelte-kit/output/server/chunks/ssr.js                                   5.07 kB
.svelte-kit/output/server/chunks/internal.js                              5.52 kB
.svelte-kit/output/server/chunks/WeightChanged.js                         8.14 kB
.svelte-kit/output/server/entries/pages/dashboard/_page.svelte.js        10.25 kB
.svelte-kit/output/server/entries/pages/_layout.svelte.js                12.09 kB
.svelte-kit/output/server/chunks/LowBattery.js                           15.20 kB
.svelte-kit/output/server/entries/pages/_page.svelte.js                  15.97 kB
.svelte-kit/output/server/chunks/Graph.js                                28.69 kB
.svelte-kit/output/server/index.js                                       87.83 kB

Run npm run preview to preview your production build locally.

> Using @sveltejs/adapter-static
  Wrote site to "build"
  ✔ done
✓ built in 11.35s
Done in 13.18s.`;

	export let logs: string[] = logs1.split('\n');
	export let lineNumbers = true;
	export let stream = false;

	let codeElement: HTMLElement;

	$: {
		console.log(logs.length);
		if (codeElement) {
			codeElement.scroll({
				top: 0,
				left: 0,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="parent" style="margin-bottom: 2rem">
	<div class="header"><button>follow</button></div>
	<div class="code" bind:this={codeElement}>
		<code>
			{#each logs as log, i (log + i)}
				<pre>{#if lineNumbers}<span class="line-number">{i + 1}</span>{/if}{log}</pre>
			{/each}
		</code>
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

		code {
			display: flex;
			flex-direction: column-reverse;
			scroll-margin: 1rem;
		}

		pre {
			display: inline-block;
			margin: 0;
			line-height: 1.2rem;
		}
	}

	.line-number {
		user-select: none;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
		-o-user-select: none;

		display: inline-block;
		min-width: 1.5rem;
		padding-right: 1.5rem;
		text-align: right;
		z-index: -1;
	}
</style>
