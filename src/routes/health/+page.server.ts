import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { getSSLInfo, healthOk } from '$lib/server/health_http';
import { HEALTH_STATUS, type HttpEndpoint } from '$lib/interfaces/health';

const ENDPOINTS: string[] = env?.HTTP_HEALTH_ENDPOINTS?.split(',');

export const load: PageServerLoad = async (): Promise<{ httpHealth: HttpEndpoint[] }> => {
	const statusPromises = ENDPOINTS?.map(async (endpointUrl) => {
		const status = await healthOk(endpointUrl);
		const ssl = await getSSLInfo(endpointUrl);

		return { status, ssl };
	});
	const endpointStatuses = await Promise.all(statusPromises);

	const httpHealth = ENDPOINTS.map((domain, i) => {
		return {
			domain: new URL(domain).hostname,
			code: endpointStatuses[i].status,
			ssl: endpointStatuses[i].ssl,
			status:
				String(endpointStatuses[i].status)[0] !== '5' ? HEALTH_STATUS.LIVE : HEALTH_STATUS.DOWN
		} as HttpEndpoint;
	});

	return {
		httpHealth
	};
};
