import type { PageServerLoad } from './$types';
import type { Node, Cluster } from '$lib/interfaces/proxmox';
import { fetchNodes } from '$lib/server/proxmox';

const TTL = 10000; // 10 seconds

interface ClusterCache {
	timestamp: number;
	data: {
		nodes: Node[];
		cluster: Cluster | null;
	};
}

let cache: ClusterCache = {
	timestamp: 0,
	data: {
		nodes: [],
		cluster: null
	}
};

export const load: PageServerLoad = async () => {
	const now = Date.now();
	const hit = cache.data.cluster && cache.data.nodes?.length && now - cache.timestamp < TTL;

	if (hit) {
		const { nodes, cluster } = cache.data;
		return { nodes, cluster };
	}

	const { nodes, cluster } = await fetchNodes();
	nodes.sort((a: Node, b: Node) => {
		return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1;
	});

	cache = { timestamp: now, data: { nodes, cluster } };

	return {
		nodes,
		cluster
	};
};
