import type { PageServerLoad } from './$types';
import { getPods } from '$lib/server/kubernetes';
import type { V1Pod } from '@kubernetes/client-node';

export const load: PageServerLoad = async ({ params }) => {
	const { uid } = params;

	console.log(uid);

	const podsResp = await getPods();
	const pods: V1Pod[] = JSON.parse(JSON.stringify(podsResp));

	const pod = pods.find((p) => p.metadata?.uid === uid);
	return {
		pod
	};
};
