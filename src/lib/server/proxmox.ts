import { env } from '$env/dynamic/private';
import type { Cluster, Node } from '$lib/interfaces/proxmox';

function buildProxmoxRequest() {
	const url = env.PROXMOX_URL || 'https://10.0.0.50:8006/api2/json/';
	const token = env.PROXMOX_TOKEN || 'REPLACE_WITH_PROXMOX_TOKEN';
	const options = {
		method: 'GET',
		headers: {
			Authorization: token,
			'Content-Type': 'application/json'
		}
	};

	return { url, options };
}

async function fetchNodeVMs(node: Node) {
	const r = buildProxmoxRequest();
	r.url += 'nodes/' + node?.name + '/qemu';

	return fetch(r.url, r?.options)
		.then((resp) => resp.json())
		.then((response) => response.data);
}

async function fetchNodeLXCs(node: Node) {
	const r = buildProxmoxRequest();
	r.url += 'nodes/' + node?.name + '/lxc';

	return fetch(r.url, r?.options)
		.then((resp) => resp.json())
		.then((response) => response.data);
}

async function fetchNodeInfo(node: Node) {
	const r = buildProxmoxRequest();
	r.url += 'nodes/' + node?.name + '/status';

	return fetch(r.url, r?.options)
		.then((resp) => resp.json())
		.then((response) => response.data);
}

async function getClusterInfo() {
	const r = buildProxmoxRequest();
	r.url += 'cluster/status';

	return fetch(r.url, r?.options)
		.then((resp) => resp.json())
		.then((response) => {
			const { data } = response;
			const cluster = data.filter((d: Node | Cluster) => d?.type === 'cluster')[0];
			const nodes = data.filter((d: Node | Cluster) => d?.type === 'node');

			return { cluster, nodes };
		});
}

export async function fetchNodes(): Promise<{ nodes: Node[]; cluster: Cluster | null }> {
	try {
		const { nodes, cluster } = await getClusterInfo();

		const infoP = Promise.all(nodes.map((node: Node) => fetchNodeInfo(node)));
		const vmsP = Promise.all(nodes.map((node: Node) => fetchNodeVMs(node)));
		const lxcsP = Promise.all(nodes.map((node: Node) => fetchNodeLXCs(node)));

		const [info, vms, lxcs] = await Promise.all([infoP, vmsP, lxcsP]);

		return {
			cluster,
			nodes: nodes.map((node: Node, i: number) => {
				return {
					...node,
					info: info[i],
					vms: vms[i],
					lxcs: lxcs[i]
				};
			})
		};
	} catch (error) {
		console.log('ERROR from fetchnodes:', error);

		return { nodes: [], cluster: null };
	}
}
