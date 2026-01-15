import dns from 'dns';
import net from 'net';

let timeout = 0;

const axfrReqProloge =
	'\x00\x00' + // Size
	'\x00\x00' + // Transaction ID
	'\x00\x20' + // Flags: Standard Query
	'\x00\x01' + // Number of questions
	'\x00\x00' + // Number of answers
	'\x00\x00' + // Number of Authority RRs
	'\x00\x00'; // Number of Additional RRs

const axfrReqEpiloge =
	'\x00' + // End of name
	'\x00\xfc' + // Type: AXFR
	'\x00\x01'; // Class: IN

function inet_ntoa(num: number): string {
	const nbuffer = new ArrayBuffer(4);
	const ndv = new DataView(nbuffer);
	ndv.setUint32(0, num);

	const a: number[] = [];
	for (let i = 0; i < 4; i++) {
		a[i] = ndv.getUint8(i);
	}
	return a.join('.');
}

interface DecompressedLabel {
	len: number;
	name: string;
	next?: number;
}

function decompressLabel(data: Buffer, offset: number): DecompressedLabel {
	const res: DecompressedLabel = { len: 0, name: '' };
	let loffset = offset;
	let tmpoff = 0;

	while (data[loffset] !== 0x00) {
		// Check for pointers
		if ((data[loffset] & 0xc0) === 0xc0) {
			const newoffset = data.readUInt16BE(loffset) & 0x3fff;
			const label = decompressLabel(data, newoffset + 2);
			res.name += label.name;
			loffset += 1;
			break;
		} else {
			// Normal label
			tmpoff = loffset + 1;
			res.name += data.toString('utf8', tmpoff, tmpoff + data[loffset]);
			res.name += '.';
			loffset += data[loffset] + 1;
		}
	}

	res.next = loffset + 1;
	return res;
}

interface DNSResult {
	questions: any[];
	answers: any[];
}

function parseResponse(response: Buffer, result: DNSResult): DNSResult | number {
	let offset = 14;
	let len = response.readUInt16BE(0);

	if (response.length !== len + 2) return -1; // Invalid length
	if ((response[4] & 0x80) !== 0x80) return -2; // Not a query response
	if ((response[5] & 0x0f) !== 0) return -3; // Error code present

	const questions = response.readUInt16BE(6);
	const answers = response.readUInt16BE(8);
	const authRRs = response.readUInt16BE(10);
	const aditRRs = response.readUInt16BE(12);

	// Parse queries
	for (let x = 0; x < questions; x++) {
		const entry = decompressLabel(response, offset);
		result.questions.push({
			name: entry.name,
			type: 'AXFR'
		});
		offset = (entry.next ?? 0) + 4;
	}

	// Parse answers
	for (let x = 0; x < answers; x++) {
		let entry: any = {};
		entry = decompressLabel(response, offset);
		offset = entry.next!;
		entry.name = entry.name;

		const type = response.readUInt16BE(offset);
		const rclass = response.readUInt16BE(offset + 2);
		entry.ttl = response.readUInt32BE(offset + 4);
		const rlen = response.readUInt16BE(offset + 8);

		// Skip non-INET
		if (rclass !== 0x01) {
			offset += rlen + 10;
			continue;
		}

		switch (type) {
			case 0x01: // A
				entry.type = 'A';
				entry.a = inet_ntoa(response.readUInt32BE(offset + 10));
				break;

			case 0x02: // NS
				entry.type = 'NS';
				entry.ns = decompressLabel(response, offset + 10).name;
				break;

			case 0x05: // CNAME
				entry.type = 'CNAME';
				entry.cname = decompressLabel(response, offset + 10).name;
				break;

			case 0x06: {
				// SOA
				entry.type = 'SOA';
				let tentry = decompressLabel(response, offset + 10);
				entry.dns = tentry.name;
				tentry = decompressLabel(response, tentry.next!);
				entry.mail = tentry.name;
				entry.serial = response.readUInt32BE(tentry.next!);
				entry.refreshInterval = response.readUInt32BE(tentry.next! + 4);
				entry.retryInterval = response.readUInt32BE(tentry.next! + 8);
				entry.expireLimit = response.readUInt32BE(tentry.next! + 12);
				entry.minTTL = response.readUInt32BE(tentry.next! + 16);
				break;
			}

			case 0x0f: // MX
				entry.type = 'MX';
				entry.pref = response.readUInt16BE(offset + 10);
				entry.mx = decompressLabel(response, offset + 12).name;
				break;

			case 0x10: // TXT
				entry.type = 'TXT';
				len = response[offset + 10];
				entry.txt = response.toString('utf8', offset + 11, offset + 11 + len);
				break;

			case 0x1c: {
				// AAAA
				entry.type = 'AAAA';
				// const byteArr = new Uint8Array(response.slice(offset + 10, offset + 26));
				// entry.aaaa = fromByteArray(byteArr).toString();
				console.warn('unable to parse AAAA DNS records');
				entry.aaaa = '::';
				break;
			}

			case 0x63: // SPF
				entry.type = 'SPF';
				len = response[offset + 10];
				entry.txt = response.toString('utf8', offset + 11, offset + 11 + len);
				break;

			case 0x21: // SRV
				entry.type = 'SRV';
				entry.priority = response.readUInt16BE(offset + 10);
				entry.weight = response.readUInt16BE(offset + 12);
				entry.port = response.readUInt16BE(offset + 14);
				entry.target = decompressLabel(response, offset + 16).name;
				break;
		}

		delete entry.len;
		delete entry.next;
		result.answers.push(entry);
		offset += rlen + 10;
	}

	return result;
}

(dns as any).resolveAxfrTimeout = (milis: number): void => {
	timeout = milis;
};

(dns as any).resolveAxfr = (
	server: string,
	domain: string,
	callback: (code: number, result: any) => void
): void => {
	const buffers: Buffer[] = [];
	const split = domain.split('.');
	const results: DNSResult = { questions: [], answers: [] };
	let responses: Buffer[] = [];
	let len = 0;
	let tlen = 0;
	const [hostname, portStr] = server.split(':');
	const port = Number(portStr) || 53;

	// Build request
	buffers.push(Buffer.from(axfrReqProloge, 'binary'));
	split.forEach((elem) => {
		const label = Buffer.from('\x00' + elem, 'utf8');
		label.writeUInt8(elem.length, 0);
		buffers.push(label);
	});
	buffers.push(Buffer.from(axfrReqEpiloge, 'binary'));
	const buffer = Buffer.concat(buffers);

	// Set size and transaction ID
	buffer.writeUInt16BE(buffer.length - 2, 0);
	buffer.writeUInt16BE(Math.floor(Math.random() * 65535 + 1), 2);

	// Connect and send request
	const socket = net.connect(port, hostname, () => {
		socket.write(buffer.toString('binary'), 'binary');
		socket.end();
	});

	if (timeout) socket.setTimeout(timeout);

	socket.on('data', (data: Buffer) => {
		if (len === 0) len = data.readUInt16BE(0);
		responses.push(data);
		tlen += data.length;

		if (tlen >= len + 2) {
			const buf = Buffer.concat(responses, tlen);
			const tmpBuf = buf.slice(0, len + 2);
			const res = parseResponse(tmpBuf, results);

			if (typeof res !== 'object') {
				socket.destroy();
				callback(res, 'Error on response');
			}
		}

		if (tlen > len + 2) {
			const buf = Buffer.concat(responses, tlen);
			const tmpBuf = buf.slice(len + 2);
			len = tmpBuf.readUInt16BE(0);
			tlen = tmpBuf.length;
			responses = [tmpBuf];
		}
	});

	socket.on('timeout', () => {
		socket.destroy();
		callback(-5, 'Timeout');
	});

	socket.on('end', () => {
		callback(0, results);
	});

	socket.on('error', () => {
		callback(-4, 'Error connecting');
	});
};

export default dns;
