import { request, Agent } from 'https';
import tls, { type PeerCertificate } from 'tls';

const SSL_WEBSERVER = '10.0.0.53';
export async function getSSLInfo(url: string, port = 443) {
	if (new URL(url).protocol !== 'https:') return { raw: 'none' };
	const hostname = new URL(url).hostname;

	return new Promise((resolve, reject) => {
		const socket = tls.connect(port, SSL_WEBSERVER, { servername: hostname }, () => {
			const cert = socket.getPeerCertificate(true);

			if (!cert || Object.keys(cert).length === 0) {
				reject(new Error('No certificate found'));
				return;
			}

			resolve({
				subject: cert.subject,
				issuer: cert.issuer,
				valid_from: cert.valid_from,
				valid_to: cert.valid_to,
				fingerprint: cert.fingerprint,
				fingerprint256: cert.fingerprint256,
				ca: cert.ca,
				nistCurve: cert.nistCurve,
				asn1Curve: cert.asn1Curve,
				serialNumber: cert.serialNumber,
				altNames: cert.subjectaltname,
				publicKey: cert?.pubkey?.toString('base64') || '',
				infoAccess: cert?.infoAccess || ''
			});

			socket.end();
		});

		socket.on('error', (err) => {
			reject(err);
		});
	});
}

export async function healthOk(url: string): Promise<number> {
	return fetch(url, { signal: AbortSignal.timeout(400) })
		.then((resp) => {
			return resp.status;
		})
		.catch((error) => {
			console.log('got error from health endpoint for url:', url);
			console.log(error);

			return 550;
		});
}
