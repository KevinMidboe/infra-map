<script lang="ts">
	import { goto } from '$app/navigation';
	import { formatBytes, formatDuration } from '$lib/utils/conversion';
	import Cpu from '$lib/icons/cpu.svelte';
	import Section from '../Section.svelte';
	import type { Node, VM } from '$lib/interfaces/proxmox';
	import FloppyDisk from '$lib/icons/floppy-disk.svelte';
	import HardDisk from '$lib/icons/hard-disk.svelte';
	import Clock from '$lib/icons/clock.svelte';
	import InsertDown from '$lib/icons/insert-down.svelte';
	import ExtractUp from '$lib/icons/extract-up.svelte';
	import Table from '../Table.svelte';
	import Power from '$lib/icons/power.svelte';

	const { vm, node }: { vm: VM, node: Node } = $props();
	console.log(node)

	const drives = Object.entries(vm.config)
		.filter(([key, _]) => {
			return key.startsWith('scsi');
		})
		?.map(([key, value]) => {
			const { disk, backup, discard, iothread, size } =
				/(?<disk>[\w\:\-]+),(backup=(?<backup>[\w|\d]+))?[,]?(discard=(?<discard>[\w|\d]+))?[,]?(iothread=(?<iothread>[\w|\d]+))?[,]?(size=(?<size>[\w|\d]+)\w)?[,]?/.exec(
					value
				)?.groups || {};
			if (!disk) return;

			return {
				device: key,
				mount: disk,
				backup: backup === '1' ? 'enabled' : 'disabled',
				size: Number(size || 1) * 1024
			};
		})
		.filter((d) => d)
		.sort((a, b) =>
			Number(a?.device.match(/\d+/)[0]) > Number(b?.device.match(/\d+/)[0]) ? 1 : -1
		);

	const pcieDevices = Object.entries(vm.config)
		.filter(([key, _]) => {
			return key.startsWith('hostpci');
		})
		?.map(([key, value]) => {
			return {
				device: key,
				name: value
			};
		});
</script>

<div>
	<Section title="Resources" description="">
		<div class="section-row">
			<div class="section-element">
				<label>ID</label>
				<span>{vm.vmid}</span>
			</div>

			<div class="section-element">
				<label>Memory usage</label>
				<span
					><span class="icon"><FloppyDisk /></span>{formatBytes(vm.mem).match(/\d+(\.\d+)?/)?.[0]} /
					{formatBytes(vm.maxmem)}</span
				>
			</div>

			<div class="section-element">
				<label>CPUs</label>
				<span>
					<span class="icon"><Cpu /></span>
					{vm.cpus} cores ({vm.config.sockets})
				</span>
			</div>

			<div class="section-element">
				<label>Disk</label>
				<span>
					<span class="icon"><HardDisk /></span>
					{formatBytes(vm.maxdisk)}
				</span>
			</div>

			<div class="section-element">
				<label>Uptime</label>
				<span>
					<span class="icon"><Clock /></span>
					{formatDuration(vm.uptime)}
				</span>
			</div>
		</div>
	</Section>

	<Section title="Status" description="">
		<div class="section-row">
			<div class="section-element">
				<label>State</label>
				<span>
					<span class="icon"><Power /></span>
					{vm.status}
				</span>
			</div>

			<div class="section-element">
				<label>CPU load</label>
				<span>{Math.floor(vm.cpu * 10000) / 100} %</span>
			</div>

			<div class="section-element">
				<label>Memory usage</label>
				<span>{Math.floor((vm.mem / vm.maxmem) * 1000) / 10} %</span>
			</div>
			<div class="section-element">
				<label>Netout</label>
				<span>
					<span class="icon"><ExtractUp /></span>
					{formatBytes(vm.netout)}
				</span>
			</div>

			<div class="section-element">
				<label>Netin</label>
				<span>
					<span class="icon"><InsertDown /></span>
					{formatBytes(vm.netin)}
				</span>
			</div>

			<div class="section-element">
				<label>Disk read</label>
				<span>
					<span class="icon"><InsertDown /></span>
					{vm.diskread}
				</span>
			</div>

			<div class="section-element">
				<label>Disk write</label>
				<span>
					<span class="icon"><InsertDown /></span>
					{vm.diskwrite}
				</span>
			</div>
		</div>
	</Section>

	<Section title="Operating System" description="">
		<div class="section-row">
			<div class="section-element">
				<label>Name</label>
				<span>{vm.os?.name}</span>
			</div>

			<div class="section-element">
				<label>Name</label>
				<span>{vm.os?.['pretty-name']}</span>
			</div>

			<div class="section-element">
				<label>Version</label>
				<span>{vm.os?.version}</span>
			</div>

			<div class="section-element">
				<label>Kernel</label>
				<span>{vm.os?.['kernel-release']}</span>
			</div>
		</div>
	</Section>

	<Section title="Filesystem" description="">
		{#if drives?.length > 0}
			<Table title="FS Devices" columns={['name', 'bus', 'mountpoint', 'type', 'space', 'size']}>
				<tbody slot="tbody">
					{#each vm.fs as device (device)}
						<tr>
							<td>{device.name}</td>
							<td>
								{#each device['disk'] as device (device)}
									<span>{device?.['bus-type']}{device?.target}</span>
								{/each}
							</td>
							<td>{device.mountpoint}</td>
							<td>{device.type}</td>
							<td>{Math.floor((device['used-bytes'] / device['total-bytes']) * 10000) / 100} %</td>
							<td>{formatBytes(device['total-bytes'])}</td>
						</tr>
					{/each}
				</tbody>
			</Table>
		{/if}
	</Section>

	<Section title="Devices" description="">
		{#if vm.network?.length > 0}
			<Table title="Network interfaces" columns={['name', 'hardward address', 'ip addresses']}>
				<tbody slot="tbody">
					{#each vm.network.sort((a,b) => a < b ? 1 : -1) as net_interface (net_interface.name)}
						<tr>
							<td>{net_interface.name}</td>
							<td>{net_interface['hardware-address']}</td>
							<td class="ip-addresses">
								{#each net_interface['ip-addresses'] as ip (ip['ip-address'])}
									<span>{ip['ip-address']}/{ip.prefix}</span>
								{/each}
							</td>
						</tr>
					{/each}
				</tbody>
			</Table>
		{/if}

		{#if drives?.length > 0}
			<Table title="Hard drives" columns={['device', 'mount', 'backup', 'size']}>
				<div slot="actions">
					<p>Total drives: {drives.length}</p>
					<p>Total capacity: {formatBytes(drives.reduce((acc, obj) => acc + obj.size, 0))}</p>
				</div>

				<tbody slot="tbody">
					{#each drives as drive (drive)}
						<tr>
							<td>{drive.device}</td>
							<td>{drive.mount}</td>
							<td>{drive.backup}</td>
							<td>{formatBytes(drive.size)}</td>
						</tr>
					{/each}
				</tbody>
			</Table>
		{/if}

		{#if pcieDevices?.length > 0}
			<Table title="PCIe devices" columns={Object.keys(pcieDevices[0])}>
				<tbody slot="tbody">
					{#each pcieDevices as pcie (pcie)}
						<tr>
							<td>{pcie.device}</td>
							<td>{pcie.name}</td>
						</tr>
					{/each}
				</tbody>
			</Table>
		{/if}
	</Section>
</div>

<style lang="scss">
	:global(article.main-container:not(:first-child)) {
		margin-top: 1rem;
	}

	.section-element {
		.icon {
			display: inline-block;
			--size: 1.3rem;
			height: var(--size);
			width: var(--size);
			padding-right: 0.5rem;

			&.spin {
				@keyframes rotate {
					0% {
						transform: rotate(0deg);
					}
					100% {
						transform: rotate(360deg);
					}
				}

				animation: rotate 6s linear infinite;
				transform-origin: calc((var(--size) / 2) - 2px) calc(var(--size) / 2);
			}
		}
	}

	tbody .ip-addresses {
		display: flex;
		flex-direction: column;
	}
</style>
