<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageElement from '$lib/components/PageElement.svelte';

	let elems = [];
	let counter = 0;
	let colors = [
		['#401C26', '#f6cfdd'],
		['#213726', '#BDCBB2'],
		['#EED7CD', '#262221'],
		['#262221', '#F3BFA2'],
		['#f6cfdd', '#401C26'],
		['#BDCBB2', '#213726'],
		['#FF8FAB', '#401C26'],
		['#9381FF', '#262221']
	];
	const descriptions = [
		'Røroshotellene, eid av Røros Hotell AS, er fire unike hoteller og spisesteder på Røros. Med røtter i lokalsamfunnet tilbyr vi autentiske opplevelser, enten du vil bo komfortabelt eller nyte lokal mat',
		'Faglige møter blir enda bedre med frisk høstluft og unike omgivelser. Kampanjepris fra 2115,-',
		'Planlegg et minneverdig bedriftsarrangement hos oss!',
		'Lei hele Erzscheidergården for en utforstyrret ramme til ditt neste møtested!'
	];

	function createPageElement(title: string, description = '', header = '') {
		if (counter + 1 >= colors.length) counter = 1;
		else counter += 1;

		return {
			bgColor: colors[counter - 1][0],
			color: colors[counter - 1][1],
			title,
			header: null,
			description: description ? description : '',
			link: title
		};
	}

	elems = elems.concat(createPageElement('sites'));
	elems = elems.concat(createPageElement('servers', 'Overview of proxmox servers'));
	elems = elems.concat(
		createPageElement(
			'printer',
			'Realtime information on P1P printer and filament overview with current & historical rolls.'
		)
	);
	elems = elems.concat(
		createPageElement(
			'network',
			'View traefik configuration & all defined routes, services & middlewares.'
		)
	);
	elems = elems.concat(
		createPageElement(
			'cluster',
			'View running resources in Kubernetes cluster. View nodes, daemonset & deployments; and get a pods realtime logs, resource usage & view related kubernetes resources.'
		)
	);
	elems = elems.concat(createPageElement('health'));

	elems = elems.concat(createPageElement('cluster '));
	elems = elems.concat(createPageElement('health '));
</script>

<PageHeader>Welcome to schleppe.cloud infra overview</PageHeader>

<p>
	This site is a local-first dashboard for monitoring the state of digital and physical tools in a
	workshop environment. It currently tracks servers (IP, cores, memory, uptime), 3D printers
	(status, history, filament stock), and other connected devices. Each device or system has its own
	page with relevant real-time and historical information. More modules are planned, including
	general monitoring tools, IoT integrations, and project overviews.
</p>

<p>
	The system is intended for hybrid spaces where digital infrastructure coexists with hands-on work.
	Alongside real-time monitoring, Schleppe is expanding to reflect the broader physical
	workspace—covering areas like tool usage, material stocks, and workstations for welding,
	woodworking, electronics, and leathercraft. The goal is to make the state of the entire
	workshop—both virtual and physical—easily visible in one place.
</p>

<div class="shortcut-grid">
	{#each elems as shortcut (shortcut.title)}
		<PageElement
			bgColor={shortcut.bgColor}
			color={shortcut.color}
			title={shortcut.title}
			header={shortcut.header}
			description={shortcut.description}
			link={shortcut.link}
		/>
	{/each}
</div>

<style lang="scss">
	p {
		font-size: 1.1rem;
		line-height: 1.4;
		line-height: 1.7;
		color: #333;

		background-color: #fafafa; /* Subtle background to separate it from the rest */
		padding: 2rem;
		border-radius: 1rem; /* Soft edges */
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* Light shadow for depth */
	}

	.shortcut-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1.2rem;
		margin-top: 2rem;
	}

	:global(.shortcut-grid .shortcut:nth-of-type(odd) h2, .shortcut-grid a:nth-of-type(odd) h2) {
		font-weight: 600;
		letter-spacing: 2.6px;
		font-family: 'Norman' !important;
	}
</style>
