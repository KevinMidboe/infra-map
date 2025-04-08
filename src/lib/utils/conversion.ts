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
