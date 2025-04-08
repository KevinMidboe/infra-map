<script lang="ts">
	import { browser } from '$app/environment';
	import type { PageData } from './$types';
	import type { V1Pod } from '@kubernetes/client-node';
	import Tab from '$lib/components/navigation/Tab.svelte';
	import Tabs from '$lib/components/navigation/Tabs.svelte';
	import TabList from '$lib/components/navigation/TabList.svelte';
	import TabView from '$lib/components/navigation/TabView.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import { formatDuration } from '$lib/utils/conversion';
	import { onMount, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import Logs from '$lib/components/Logs.svelte';
	import { source } from 'sveltekit-sse';

	let value = 'no data :(';
	if (browser) {
		console.log('setting up sse', window.location.pathname);
		value = source(window.location.pathname + '/logs').select('message');
		console.log(value);
	}

	let { data }: { data: PageData } = $props();
	const { pod }: { pod: V1Pod | undefined } = data;
	const { status, metadata, spec } = pod || {};
	// console.log(pod);

	let uptime = writable(new Date().getTime() - new Date(status?.startTime || 0).getTime());

	let logs = writable([]);
	let eventSource: EventSource;

	function setupWS() {
		const url = new URL(`${window.location.origin}/cluster/pod/${pod?.metadata?.uid}/logs`);
		if (pod?.metadata) {
			console.error('missing pod info. not enough metadata to setup WS connection.');
			return;
		}

		url.searchParams.append('pod', pod?.metadata?.name || '');
		url.searchParams.append('namespace', pod?.metadata?.namespace || '');
		url.searchParams.append('container', pod?.spec?.containers[0].name || '');

		eventSource = new EventSource(url);
		eventSource.onmessage = function (event) {
			logs.update((arr) => arr.concat(event.data));
		};

		return (eventSource.onerror = (err) => {
			console.error('EventSource failed:', err);
		});
	}

	onMount(() => {
		setInterval(() => uptime.update((n) => n + 1000), 1000);
		return setupWS();
	});

	onDestroy(() => {
		if (eventSource) {
			eventSource.close();
			console.log('EventSource closed');
		}
	});
</script>

<PageHeader>Pod: {pod?.metadata?.name}</PageHeader>

<Tabs>
	<TabList>
		<Tab>Details</Tab>
		<Tab>Logs</Tab>
		<Tab>Metadata</Tab>
		<Tab>Deployment logs</Tab>
	</TabList>

	<TabView>
		<div class="section-wrapper">
			<Section title="Status" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Phase</label>
						<span>{status?.phase}</span>
					</div>

					<div class="section-element">
						<label>Pod IP</label>
						<span>{status?.podIP}</span>
					</div>

					<div class="section-element">
						<label>QoS Class</label>
						<span>{status?.qosClass}</span>
					</div>

					<div class="section-element">
						<label>Running for</label>
						<span>{formatDuration($uptime / 1000)}</span>
					</div>
				</div>
			</Section>

			<Section title="Metadata" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Namespace</label>
						<span>{metadata?.namespace}</span>
					</div>

					<div class="section-element">
						<label>Parent resource</label>
						<span>{metadata?.ownerReferences?.[0].kind}</span>
					</div>
				</div>
			</Section>

			<Section title="Spec" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Node name</label>
						<span>{spec?.nodeName}</span>
					</div>

					<div class="section-element">
						<label>Restart policy</label>
						<span>{spec?.restartPolicy}</span>
					</div>

					<div class="section-element">
						<label>Service account</label>
						<span>{spec?.serviceAccount}</span>
					</div>

					<div class="section-element">
						<label>Scheduler</label>
						<span>{spec?.schedulerName}</span>
					</div>

					<div class="section-element">
						<label>Host network</label>
						<span>{spec?.hostNetwork ? 'yes' : 'no'}</span>
					</div>

					<div class="section-element">
						<label>DNS policy</label>
						<span>{spec?.dnsPolicy}</span>
					</div>
				</div>
			</Section>
		</div>
	</TabView>

	<TabView>
		<Logs logs={$logs} stream={true} />
	</TabView>

	<TabView>
		<Logs logs={JSON.stringify(metadata, null, 2).split('\n')} lineNumbers={false} />
	</TabView>

	<TabView>
		<Logs lineNumbers={false} />
	</TabView>
</Tabs>
