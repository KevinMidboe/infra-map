<script lang="ts">
	import { onMount } from 'svelte';
	import { grey400x225 } from '$lib/utils/staticImageSource';
	import Dialog from './Dialog.svelte';

	const IMAGE_REFRESH_INTERVAL = 1000;

	let { imageUrl }: { imageUrl: string } = $props();
	let lastUpdated = new Date();
	let timestamp = $state(0);
	let fullscreen = $state(false);

	let imageSource: string | ArrayBuffer = grey400x225;
	let lastCacheSize: string;

	function loadBlob(blob: Blob) {
		const reader = new FileReader();
		reader.onloadend = () => {
			const img = document.getElementById('live-image') as HTMLImageElement;
			if (!img) return;

			imageSource = reader?.result || '';
			if (imageSource === '') {
				console.log('no image data, returning');
				return;
			}

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

<div class="liveimage">
	{#if !fullscreen}
		<img on:click={() => (fullscreen = !fullscreen)} src={String(imageSource)} id="live-image" />
	{:else}
		<div class="fullscreen-container">
			<Dialog title="Live stream of printer" close={() => (fullscreen = false)}>
				<img style="width: 100%;" src={String(imageSource)} id="live-image" />
				<span>Last update {timestamp}s ago</span>
			</Dialog>

			<img src={String(grey400x225)} />
		</div>
	{/if}
	<span>Last update {timestamp}s ago</span>
</div>

<style lang="scss">
	.liveimage img {
		width: 100%;
		max-width: 400px;
		border-radius: 0.5rem;
	}

	span {
		display: block;
	}

	:global(.fullscreen-container .dialog > div) {
		max-width: unset;
	}
</style>
