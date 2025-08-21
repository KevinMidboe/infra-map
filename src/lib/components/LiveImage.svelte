<script lang="ts">
	import { onMount } from 'svelte';
	import { grey400x225 } from '$lib/utils/staticImageSource';
	import Dialog from './Dialog.svelte';

	const IMAGE_PROXY_URL = 'http://localhost:6081';
	const IMAGE_REFRESH_INTERVAL = 300;

	let { imageUrl }: { imageUrl: string } = $props();
	let lastUpdated = new Date();
	let timestamp = $state(0);
	let fullscreen = $state(false);

	let imageSource: string | ArrayBuffer = grey400x225;
	let lastCacheSize: string;

	function loadBlob(blob: Blob) {
		const reader = new FileReader();
		reader.onloadend = () => {
			imageSource = reader.result || '';
			const img = document.getElementById('live-image') as HTMLImageElement;
			if (!img) return;

			// set imageSource to image element
			img.src = `data:image/jpeg;base64; ${imageSource}`;
			lastUpdated = new Date();
		};

		// load blob into FileReader
		reader.readAsDataURL(blob);
	}

	function refetchImage() {
		let url;
		try {
			const { protocol, host } = window.location;
			url = new URL(`${protocol}//${host}/image-proxy/${imageUrl}`);
		} catch {
			console.log('url not valid, returning');
			return;
		}

		const options = {
			method: 'GET',
			headers: {
				'Content-Type': 'image/jpeg',
				'If-None-Match': lastCacheSize
			}
		};

		fetch(url.href, options)
			.then((resp) => {
				if (resp.status === 304) throw Error('image exists');
				lastCacheSize = resp.headers.get('Content-Length') || '';
				return resp;
			})
			.then((resp) => resp.blob())
			.then((blob) => loadBlob(blob))
			.catch(() => {}); // suppress all exceptions
	}

	function timeDiff(d: Date) {
		const seconds = d.getTime();
		const v = seconds - lastUpdated.getTime();
		return Math.floor(v / 100) / 10;
	}

	onMount(() => {
		refetchImage();
		const imageInterval = setInterval(refetchImage, IMAGE_REFRESH_INTERVAL);
		const timerInterval = setInterval(() => (timestamp = timeDiff(new Date())), 80);

		return () => Promise.all([clearInterval(imageInterval), clearInterval(timerInterval)]);
	});
</script>

<div>
	{#if !fullscreen}
		<img on:click={() => (fullscreen = !fullscreen)} src={String(imageSource)} id="live-image" />
	{:else}
		<Dialog title="Live stream of printer" on:close={() => (fullscreen = false)}>
			<img style="width: 100%;" src={String(imageSource)} id="live-image" />
		</Dialog>

		<img src={String(grey400x225)} />
	{/if}
	<span>Last update {timestamp}s ago</span>
</div>

<style lang="scss">
	img {
		width: 400px;
		border-radius: 0.5rem;
	}

	span {
		display: block;
	}
</style>
