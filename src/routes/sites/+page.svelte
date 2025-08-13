<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import ThumbnailButton from '$lib/components/ThumbnailButton.svelte';

	interface Site {
		title: string;
		image: string;
		link: string;
		background?: string;
		color?: string;
	}

	const sites: Array<Site> = [
		{
			title: 'Grafana',
			image: '/images/grafana.png',
			link: 'https://grafana.schleppe.cloud',
			background: '#F5E3DC',
			color: '#F05A24'
		},
		{
			title: 'Prometheus',
			image: '/images/prometheus.svg',
			link: 'http://prome.schleppe:9090',
			background: '#262221',
			color: '#F3BFA2'
		},
		{
			title: 'Traefik',
			image: '/images/traefik.png',
			link: 'https://grafana.schleppe.cloud',
			background: '#30A4C2',
			color: 'white'
		},
		{
			title: 'Kibana',
			image: '/images/kibana.svg',
			link: 'https://kibana.schleppe.cloud',
			background: '#f6cfdd',
			color: '#401C26'
		},
		{
			title: 'HASS',
			image: '/images/hass.png',
			link: 'http://homeassistant.schleppe:8123',
			background: '#1ABCF2',
			color: 'white'
		},
		{
			title: 'Vault',
			image: '/images/vault.svg',
			link: 'http://vault.schleppe:8200',
			background: 'white',
			color: 'black'
		},
		{
			title: 'Drone',
			image: '/images/drone.png',
			link: 'https://drone.schleppe.cloud',
			background: '#D8E2F0',
			color: '#1E375A'
		},
		{
			title: 'Immich',
			image: '/images/immich.png',
			link: 'http://immich.schleppe:2283',
			background: 'white',
			color: 'black'
		},
		{
			title: 'Wiki',
			image: '/images/xwiki.png',
			link: 'https://wiki.schleppe.cloud',
			background: 'white',
			color: 'black'
		},
		{
			title: 'Gitea',
			image: '/images/gitea.png',
			link: 'https://git.schleppe.cloud',
			background: '#E6E7D7',
			color: '#609925'
		},
		{
			title: 'PBS',
			image: '/images/proxmox.png',
			link: 'https://clio.schleppe:8007',
			background: '#EDE1D2',
			color: '#E66B00'
		}
	];
</script>

<PageHeader>Sites</PageHeader>

<div class="section-wrapper">
	{#each sites as site}
		<ThumbnailButton
			title={site.title}
			image={site.image}
			background={site.background}
			color={site.color}
			link={site.link}
		/>
	{/each}

	<Section
		title="Expose HTTP traffic"
		description="You can reach your Application on a specific Port you configure, redirecting all your domains to it. You can make it Private by disabling HTTP traffic."
	/>

	<Section
		title="IP restrictions"
		description="Restrict or block access to your application based on specific IP addresses or CIDR blocks."
	/>

	<Section
		title="Expose HTTP traffic"
		description="You can reach your Application on a specific Port you configure, redirecting all your domains to it. You can make it Private by disabling HTTP traffic."
	/>

	<Section
		title="Connected services"
		description="Connected services can communicate with your application over the private network."
	/>
</div>

<style lang="scss">
	.section-wrapper {
		display: grid;
		grid-template-columns: repeat(4, 1fr);

		@media screen and (max-width: 1000px) {
			grid-template-columns: repeat(3, 1fr);
		}

		@media screen and (max-width: 750px) {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
