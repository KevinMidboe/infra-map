import {
	fetchNodes,
	vmInfo,
	vmCloudInit,
	vmAgentOS,
	vmAgentFS,
	vmAgentNetwork
} from '$lib/server/proxmox';
import type { Node, VM } from '$lib/interfaces/proxmox';
import type { PageServerLoad } from './$types';

const AVAILABLE_RESOURCES = ['node', 'vm', 'lxc'];

const filterResources = (resource: Node | VM, id) => {
	if (resource?.name && resource.name === id) {
		return resource;
	}

	return null;
};

export const load: PageServerLoad = async ({ params }) => {
	const { kind, id } = params;
	console.log('KIND', kind);

	if (!AVAILABLE_RESOURCES.includes(kind)) {
		return {
			error: 'No resource ' + kind,
			resource: null
		};
	}
	console.log(params.id);

	const cluster = await fetchNodes();
	let vm = [];
	let nodeId;
	const resources: Array<Node | VM> = [];

	switch (kind) {
		case 'node':
			vm = cluster?.nodes.find((n) => n.name === id) || resources;
			break;
		case 'vm':
			nodeId = cluster.nodes.find(
				(n) => n.vms.filter((vm) => String(vm.vmid) === id)?.length > 0
			)?.name;
			const clusterVM = cluster.nodes.flatMap((n) => n.vms)?.find((vm) => String(vm.vmid) === id);

			if (!nodeId || !clusterVM.vmid) return;
			const [cloudInit, os, fs, network] = await Promise.all([
				vmCloudInit(nodeId, clusterVM.vmid),
				vmAgentOS(nodeId, clusterVM.vmid),
				vmAgentFS(nodeId, clusterVM.vmid),
				vmAgentNetwork(nodeId, clusterVM.vmid)
			]);
			vm = {
				config: await vmInfo(nodeId, clusterVM.vmid),
				cloudInit,
				os,
				fs,
				network,
				...clusterVM
			};
			// resources =  [vm]
			break;
		case 'lxc':
			vm = cluster.nodes.flatMap((n) => n.lxcs)?.find((lxc) => String(lxc.vmid) === id);

			break;
		default:
			console.log('no resources found');
	}

	// console.log('returning', vm);

	return {
		resource: vm,
		kind: params.kind,
		id: params.id,
		error: null
	};
};
