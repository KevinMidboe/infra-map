import type { PageServerLoad } from './$types';
import { getPods, getNodes, getDeployments, getDaemons } from '$lib/server/kubernetes';
import type { V1DaemonSet, V1Deployment, V1Node, V1Pod } from '@kubernetes/client-node';

function filterAndStackNodes(nodes: V1Node[], pods: V1Pod[]) {
	const getNode = (name: string) => nodes.find((node) => node.metadata?.name === name);

	pods.forEach((pod) => {
		if (!pod.spec?.nodeName) return;
		const node = getNode(pod.spec.nodeName);
		node.pods.push(pod);
	});

	return nodes;
}

function filterAndStackDaemons(daemons: V1DaemonSet[], pods: V1Pod[]) {
	const getDaemon = (name: string) =>
		daemons.find((daemon: V1DaemonSet) => daemon.metadata?.name === name);

	pods.forEach((pod: V1Pod) => {
		if (!pod.metadata?.ownerReferences?.[0].name) return;

		const daemon = getDaemon(pod.metadata.ownerReferences[0].name);
		if (!daemon) return;
		daemon?.pods.push(pod);
	});

	return daemons;
}

function filterAndStackDeploys(deploys: V1Deployment[], pods: V1Pod[]) {
	const getDeploy = (name: string) =>
		deploys.find((deploy) => {
			return (
				(deploy.spec?.selector.matchLabels?.app &&
					deploy.spec.selector.matchLabels?.app === name) ||
				(deploy.metadata?.labels?.['app.kubernetes.io/name'] &&
					deploy.metadata.labels['app.kubernetes.io/name'] === name) ||
				(deploy.metadata?.labels?.['k8s-app'] && deploy.metadata.labels['k8s-app'] === name)
			);
		});

	pods.forEach((pod) => {
		const name =
			pod.metadata?.labels?.['k8s-app'] ||
			pod.metadata?.labels?.['app.kubernetes.io/name'] ||
			pod.metadata?.labels?.app ||
			'not found';

		const deploy = getDeploy(name);
		if (!deploy) return;
		deploy.pods.push(pod);
	});

	return deploys;
}

export const load: PageServerLoad = async () => {
	const [podsResp, nodesResp, deployResp, daemonsResp] = await Promise.all([
		getPods(),
		getNodes(),
		getDeployments(),
		getDaemons()
	]);

	const pods: V1Pod[] = JSON.parse(JSON.stringify(podsResp));
	let nodes: V1Node[] = JSON.parse(JSON.stringify(nodesResp));
	let deployments: V1Deployment[] = JSON.parse(JSON.stringify(deployResp));
	let daemons: V1DaemonSet[] = JSON.parse(JSON.stringify(daemonsResp));

	nodes.forEach((node) => (node['pods'] = []));
	deployments.forEach((deploy) => (deploy['pods'] = []));
	daemons.forEach((daemon) => (daemon['pods'] = []));
	nodes = filterAndStackNodes(nodes, pods);
	deployments = filterAndStackDeploys(deployments, pods);
	daemons = filterAndStackDaemons(daemons, pods);

	// TODO move to frontend
	deployments = deployments.sort((a, b) =>
		a.metadata?.name && b.metadata?.name && a.metadata?.name > b.metadata?.name ? 1 : -1
	);

	return {
		nodes,
		deployments,
		daemons,
		pods
	};
};
