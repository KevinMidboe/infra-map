import { exec } from 'child_process';
import dns from '$lib/utils/dns';
import type { Record } from '$lib/interfaces/DNS';
import type { PageServerLoad } from './$types';

// Regex for IPv4 validation
const ipv4Regex = /^(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)){3}$/;

function ping(data: string): Promise<boolean> {
	if (!ipv4Regex.test(data)) return;
	const ip = data;

	console.log(`Starting ping for ip: ${ip}`);
	const resolver = '10.0.0.72';

	return new Promise((resolve, reject) => {
		exec(
			`ping -c 1 -t 1.5 -W 1 ${ip} > /dev/null 2>&1 && exit 0 || exit 1`,
			(error, stdout, stderr) => {
				if (error) {
					console.error(`❌ Exec error: ${error.message}`);
					reject(error);
				}
				if (stderr) {
					console.error(`⚠️ Stderr: ${stderr}`);
					reject(error);
				}

				console.log('✅ Ping response received:', stdout);
				resolve(true);
			}
		);
	});
}

function axfrAsync(server: string, domain: string) {
	return new Promise((resolve, reject) => {
		dns.resolveAxfr(server, domain, (err, resp) => {
			if (err) reject(err);
			resolve(resp?.answers);
		});
	});
}

export const load: PageServerLoad = async () => {
	const server = '10.0.0.72';
	const domain = 'schleppe';
	const records = await axfrAsync(server, domain);

	// console.log('records::', records);
	const ARecords = records?.filter((r) => r?.type === 'A');

	for (let i = 0; i < ARecords.length; i++) {
		try {
			// const a = await ping(ARecords[i].a);
			records[i]['available'] = true;
		} catch (_) { }
	}

	return {
		records
	};
};
