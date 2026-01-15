export interface Record {
	name: string;
	ttl: number;
	class: string;
	type: string;
	data: string;
	available?: boolean;
}
