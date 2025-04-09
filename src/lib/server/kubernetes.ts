import * as k8s from '@kubernetes/client-node';
import stream from 'stream';
import { writable } from 'svelte/store';

const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
const appsV1Api = kc.makeApiClient(k8s.AppsV1Api);

const k8sLog = new k8s.Log(kc);

export async function getReplicas() {
	try {
		const allReplicas = await appsV1Api.listReplicaSetForAllNamespaces();
		return allReplicas.items;
	} catch (error) {
		console.log('error when getting replicas:', error);
		return [];
	}
}

export async function getPods() {
	try {
		const allPods = await k8sApi.listPodForAllNamespaces();
		return allPods.items;
	} catch (error) {
		console.log('error when getting k8s resources:', error);
		return [];
	}
}

export async function getPod(name: string, namespace: string) {
	try {
		return await k8sApi.readNamespacedPodTemplate({ name, namespace });
	} catch (error) {
		console.log(`error when getting pod:`, error);
		return undefined;
	}
}

export async function getDeployments() {
	try {
		const allDeploys = await appsV1Api.listDeploymentForAllNamespaces();
		return allDeploys.items;
	} catch (error) {
		console.log('error when getting deployments:', error);
		return [];
	}
}

export async function getDaemons() {
	try {
		const allDaemons = await appsV1Api.listDaemonSetForAllNamespaces();
		return allDaemons.items;
	} catch (error) {
		console.log('error when getting daemons:', error);
		return [];
	}
}

export async function getNodes() {
	try {
		const nodes = await k8sApi.listNode();
		return nodes.items;
	} catch (error) {
		console.log('error when getting k8s nodes:', error);
		return [];
	}
}

export function createLogStream(podName: string, namespace: string, containerName: string) {
	// const logEmitter = new EventTarget(); // use EventTarget or EventEmitter
	const logEmitter = writable();

	const maxLines = 400;
	let liveStream: stream.PassThrough | null = null;
	let logAbortController;

	async function start() {
		// Live logs
		liveStream = new stream.PassThrough();
		liveStream.on('data', (chunk) => {
			let chunks = chunk.toString().split('\n').filter(Boolean);

			console.log('chynjks length:', chunks?.length);
			if (chunks?.length > maxLines) {
				chunks = chunks.slice(maxLines);
			}

			chunks.forEach((line) => logEmitter.set(line));
		});

		console.log('setting logAbortController, prev:', logAbortController);
		logAbortController = await k8sLog.log(namespace, podName, containerName, liveStream, {
			follow: true,
			timestamps: false,
			pretty: false,
			tailLines: maxLines
		});
	}

	function stop() {
		console.log('ending livestream!!');
		logAbortController?.abort();
		liveStream?.end();
	}

	return { start, stop, logEmitter };
}
