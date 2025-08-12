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
			image:
				'https://www.stackhero.io/assets/src/images/servicesLogos/openGraphVersions/grafana.png',
			link: 'https://grafana.schleppe.cloud',
			background: '#082448',
			color: 'white'
		},
		{
			title: 'Prometheus',
			image: 'https://prometheus.io/_next/static/media/prometheus-logo.7aa022e5.svg',
			link: 'http://prome.schleppe:9090'
		},
		{
			title: 'Traefik',
			image: 'https://storage.googleapis.com/schleppe-files/Traefik.logo_shape_bordered.png',
			link: 'https://grafana.schleppe.cloud',
			background: '#30A4C2',
			color: '#343A40'
		},
		{
			title: 'Kibana',
			image: 'https://marketplace-assets.digitalocean.com/logos/sharklabs-kibana.svg',
			link: 'https://kibana.schleppe.cloud'
		},
		{
			title: 'HASS',
			image:
				'https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Home_Assistant_logo_%282023%29.svg/2048px-Home_Assistant_logo_%282023%29.svg.png',
			link: 'http://homeassistant.schleppe:8123'
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
	}
</style>
