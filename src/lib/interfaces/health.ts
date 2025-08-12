export enum HEALTH_STATUS {
	LIVE = 'live',
	UNKNOWN = 'unknown',
	DOWN = 'down'
}

export interface HttpEndpoint {
	domain: string;
	code: number;
	status: HEALTH_STATUS.DOWN;
}
