export function formatBytes(bytes: number) {
	if (bytes < 1024) return '0 KB'; // Ensure we don't show bytes, only KB and above

	const units = ['KB', 'MB', 'GB', 'TB'];
	let unitIndex = -1;
	let formattedSize = bytes;

	do {
		formattedSize /= 1024;
		unitIndex++;
	} while (formattedSize >= 1024 && unitIndex < units.length - 1);

	return `${formattedSize.toFixed(2)} ${units[unitIndex]}`;
}

export function formatDuration(seconds: number) {
	if (seconds === 0) return 'Uptime: 0 days 00:00:00';

	const days = Math.floor(seconds / 86400);
	seconds %= 86400;
	const hours = Math.floor(seconds / 3600);
	seconds %= 3600;
	const minutes = Math.floor(seconds / 60);
	seconds %= 60;

	return `${days} days ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(Math.floor(seconds)).padStart(2, '0')}`;
}

export function daysUntil(dateString: string) {
	const inputDate = new Date(dateString);
	const today = new Date();

	// Clear time components for accurate day comparison
	inputDate.setHours(0, 0, 0, 0);
	today.setHours(0, 0, 0, 0);

	const diffTime = inputDate - today;
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	return diffDays;
}

export function convertKiToHumanReadable(input: string) {
	const match = input.match(/^(\d+)(Ki)$/);
	if (!match) return 'Invalid input';

	const kibibytes = parseInt(match[1], 10);
	const bytes = kibibytes * 1024;

	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	let i = 0;
	let humanReadable = bytes;

	while (humanReadable >= 1024 && i < sizes.length - 1) {
		humanReadable /= 1024;
		i++;
	}

	return `${humanReadable.toFixed(2)} ${sizes[i]}`;
}

export function formatTimeLeft(seconds: number, short = false) {
	const units = [
		{ label: 'mo', value: 2592000 }, // 30 days as an average month
		{ label: 'd', value: 86400 },
		{ label: 'h', value: 3600 },
		{ label: 'm', value: 60 },
		{ label: 's', value: 1 }
	];

	let remaining = seconds;
	const parts = [];

	for (const unit of units) {
		if (remaining >= unit.value) {
			const amount = Math.floor(remaining / unit.value);
			remaining %= unit.value;
			parts.push(`${amount}${unit.label}`);
		}
	}

	if (short) return parts.slice(' ')[0];

	// If 0 seconds, still return "0s"
	return parts.length > 0 ? parts.join(' ') : '0s';
}

export function formatDateIntl(d: Date) {
	return new Intl.DateTimeFormat('nb-NO', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		weekday: 'short'
	}).format(d);
}
