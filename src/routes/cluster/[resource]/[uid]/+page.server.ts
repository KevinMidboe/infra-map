import type { PageServerLoad } from './$types';
import { getPods, getDaemons, getReplicas, getDeployments } from '$lib/server/kubernetes';
import type { V1DaemonSet, V1Deployment, V1Pod } from '@kubernetes/client-node';

const AVAILABLE_RESOURCES = [
	'pod',
	'deployment',
	'daemonset',
	'cronjobs',
	'configmap',
	'replicaset'
];

export const load: PageServerLoad = async ({ params }) => {
	const { resource, uid } = params;
	console.log('PARAMS:', params);

	if (!AVAILABLE_RESOURCES.includes(resource)) {
		return {
			error: 'No resource ' + resource,
			resource: null
		};
	}
	console.log(uid);

	let resources: V1Pod[];

	switch (resource) {
		case 'pod':
			const podsResp: V1Pod[] = await getPods();
			resources = JSON.parse(JSON.stringify(podsResp));
			break;
		case 'daemonset':
			const daemonsResp: V1DaemonSet[] = await getDaemons();
			resources = JSON.parse(JSON.stringify(daemonsResp));
			break;
		case 'deployment':
			const deploymentResp: V1Deployment[] = await getDeployments();
			resources = JSON.parse(JSON.stringify(deploymentResp));
			break;
		case 'replicaset':
			console.log('replicas');
			const replicasResp: V1ReplicaSet[] = await getReplicas();
			console.log('replicas', replicasResp);
			resources = JSON.parse(JSON.stringify(replicasResp));
			break;
		default:
			console.log('no resources found');
	}

	const singleResource = resources?.find((p) => p.metadata?.uid === uid);
	delete singleResource?.metadata?.managedFields;

	return {
		resource: singleResource,
		kind: resource,
		error: null
	};
};
