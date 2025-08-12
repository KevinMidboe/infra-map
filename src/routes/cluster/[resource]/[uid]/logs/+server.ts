import { createLogStream } from '$lib/server/kubernetes';
import { produce } from 'sveltekit-sse';

export function GET({ request }) {
	return produce(async function start({ emit }) {
		console.log('----- REQUEST -----');
		const url = new URL(request.url);
		const pod = url.searchParams.get('pod');
		const namespace = url.searchParams.get('namespace');
		const container = url.searchParams.get('container');

		console.log('pod, namespace:', pod, namespace);
		const k8sLogs = createLogStream(pod, namespace, container);
		k8sLogs.start();
		const unsubscribe = k8sLogs.logEmitter.subscribe((msg: string) => {
			emit('message', msg);
		});

		const { error } = emit('message', `the time is ${Date.now()}`);

		if (error) {
			k8sLogs.stop();
			unsubscribe();
			return;
		}
	});
}
