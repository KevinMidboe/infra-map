<script lang="ts">
	import { onMount } from 'svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { hexToRgba } from '$lib/utils/color.ts';
	import { data } from '$lib/utils/zigbee_devices';

	let width = 650;
	let originalData = { ...data };
	let element;
	let hovering;
	let Graph;
	let state = 0;
	export const ssr = false;

	function nodeCanvasObject(node, ctx, globalScale) {
		const label = node.name;
		let baseFontSize = 7;
		let exponent = -0.6; // Adjust this value based on testing to find the right feel.
		let fontSize = baseFontSize * Math.pow(globalScale, exponent);

		ctx.font = `${fontSize}px sans-serif`;
		const textWidth = ctx.measureText(label).width;
		const bckgDimensions = [textWidth, fontSize].map((n) => n + fontSize * 0.2); // some padding

		ctx.beginPath();
		let color = groupToColor(node.group);
		if (hovering) {
			const hoveredNeighbor = hovering?.neighbors?.findIndex((n) => n.ieee === node.ieee);
			color = hoveredNeighbor === -1 && hovering.ieee !== node.ieee ? hexToRgba(color, 0.2) : color;
		}

		ctx.fillStyle = color || 'blue';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(label, node.x + 5 + 5 * fontSize, node.y); // Adjust position as needed

		ctx.arc(node.x, node.y, node.radius || 5, 0, 2 * Math.PI, false);
		ctx.fillStyle = color || 'blue';
		ctx.fill();

		ctx.fill();
	}

	function groupToColor(group) {
		switch (group) {
			case 0:
				return '#01A9F4';
			case 1:
				return '#00BCD4';
			case 2:
				return '#009688';
			case 3:
				return '#DB4537';
			default:
				return 'blue';
		}
	}

	function createNodeLabel(node) {
		const el = document.createElement('div');
		el.style.display = 'flex';
		el.style.flexDirection = 'column';
		const ob = {
			Name: node.name,
			IEEE: node.ieee,
			'Device type': node.type,
			NWK: '0x3cf1',
			Device: node.device,
			Area: node.area
		};
		el.innerHTML = Object.entries(ob)
			.map(([title, text]) => {
				return `<span><b>${title}:</b> ${text}</span>`;
			})
			.toString()
			.replaceAll(',', '');
		return el;
	}

	async function draw() {
		const ForceGraph = (await import('force-graph')).default;
		Graph = new ForceGraph(element)
			.width(800)
			.height(550)
			.graphData(data)
			.linkDirectionalParticles(2)
			.linkDirectionalParticleWidth(1.4)
			.linkCurvature(0)
			.nodeCanvasObject(nodeCanvasObject)
			.nodeLabel(createNodeLabel)
			.onNodeClick((node) => {
				// Center/zoom on node
				Graph.centerAt(node.x, node.y, 1000);
				Graph.zoom(8, 2000);
			})
			.onNodeHover((node) => {
				hovering = node || null;
				console.log(node);
			});

		setTimeout(() => Graph?.zoomToFit(0, 140), 20);
	}

	onMount(() => {
		draw();
		// window.addEventListener('mousemove', trackMouse, false);
		console.log(data);
	});

	function toggleView() {
		if (state === 0) {
			data.links = originalData.links.filter(
				(l) => l.source.ieee === '00:21:2e:ff:ff:09:44:73'
			);
		} else if (state === 1) {
			data.links = originalData.links;
		} else if (state === 2) {
			data.links = originalData.links;
			data.links.shift();
		}

		state += 1;
		if (state === 3) state = 0;

		console.log(data);
		Graph.graphData(data);
		draw();
	}
</script>

<PageHeader>Zigbee</PageHeader>

<div>
	<button class="affirmative" on:click={toggleView}><span>Toggle topology</span></button>
</div>

<div class="container">
	<div class="header">
		<span>Coordinator</span>
		<span>Router</span>
		<span>End device</span>
		<span>Offline</span>
	</div>
	<div id="graph" bind:this={element}></div>
</div>


<style lang="scss">
	button span {
		padding: 0.25rem 0.5rem;
		margin-bottom: 1.5rem;
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: 1px;
		font-style: italic;
	}

	.container {
		display: inline-block;
		border: 3px solid black;
		border-radius: var(--border-radius);
		position: relative;

		.header {
			position: absolute;
			height: 2rem;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			span {
				margin: 0 1rem;

				&:nth-of-type(1)::before {
					content: '';
					position: absolute;
					margin-top: 1px;
					margin-left: -1.6rem;
					height: 1rem;
					width: 1.4rem;
					border-radius: 3px;
					background-color: #01a9f4;
				}

				&:nth-of-type(2)::before {
					content: '';
					position: absolute;
					margin-top: 1px;
					margin-left: -1.2rem;
					height: 1rem;
					width: 1rem;
					border-radius: 50%;
					background-color: #00bcd4;
				}

				&:nth-of-type(3)::before {
					content: '';
					position: absolute;
					margin-top: 1px;
					margin-left: -1.2rem;
					height: 1rem;
					width: 1rem;
					border-radius: 50%;
					background-color: #009688;
				}

				&:nth-of-type(4)::before {
					content: '';
					position: absolute;
					margin-top: 1px;
					margin-left: -1.2rem;
					height: 1rem;
					width: 1rem;
					border-radius: 50%;
					background-color: #db4537;
				}
			}
		}
	}
</style>
