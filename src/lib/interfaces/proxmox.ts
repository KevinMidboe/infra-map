export interface Cluster {
	id: string;
	quorate: number;
	version: number;
	type: string;
	nodes: number;
	name: string;
}

interface Memory {
	used: number;
	free: number;
	total: number;
}

interface RootFs {
	used: number;
	free: number;
	avail: number;
	total: number;
}

interface Swap {
	total: number;
	free: number;
	used: number;
}

interface CpuInfo {
	cores: number;
	mhz: string;
	cpus: number;
	model: string;
	sockets: number;
	user_hz: number;
	flags: string;
	hvm: string;
}

interface KernelInfo {
	release: string;
	sysname: string;
	version: string;
	machine: string;
}

interface BootInfo {
	secureboot?: number;
	mode: string;
}

interface NodeStatus {
	memory: Memory;
	kversion: string;
	cpu: number;
	ksm: { shared: number };
	uptime: number;
	currentKernel: KernelInfo;
	rootfs: RootFs;
	swap: Swap;
	idle: number;
	cpuinfo: CpuInfo;
	pveversion: string;
	loadavg: [string, string, string];
	wait: number;
	bootInfo: BootInfo;
}

export interface VM {
	cpu: number;
	cpus: number;
	disk: number;
	diskread: number;
	diskwrite: number;
	maxdisk: number;
	maxmem: number;
	mem: number;
	name: string;
	netin: number;
	netout: number;
	pid: number;
	status: string;
	uptime: number;
	vmid: number;
}

export interface LXC {
	cpu: number;
	cpus: number;
	disk: number;
	diskread: number;
	diskwrite: number;
	maxdisk: number;
	maxmem: number;
	maxswap: number;
	mem: number;
	name: string;
	netin: number;
	netout: number;
	pid: number;
	status: string;
	swap: number;
	type: string;
	uptime: number;
	vmid: number;
}

export interface Node {
	info: NodeStatus;
	online: number;
	nodeid: number;
	local: number;
	name: string;
	id: string;
	type: string;
	ip: string;
	level: string;
}
