<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Tab from '$lib/components/navigation/Tab.svelte';
	import Tabs from '$lib/components/navigation/Tabs.svelte';
	import TabList from '$lib/components/navigation/TabList.svelte';
	import TabView from '$lib/components/navigation/TabView.svelte';
	import Section from '$lib/components/Section.svelte';
	import JsonViewer from '$lib/components/JsonViewer.svelte';
	import type { V1DaemonSet } from '@kubernetes/client-node';

	const { daemonset }: { daemonset: V1DaemonSet } = $props();
	const { status, spec } = daemonset || {};

	let uptime = writable(new Date().getTime() - new Date(status?.startTime || 0).getTime());

	onMount(() => {
		setInterval(() => uptime.update((n) => n + 1000), 1000);
	});
</script>

<Tabs>
	<TabList>
		<Tab>Details</Tab>
		<Tab>Metadata</Tab>
		<Tab>Spec</Tab>
		<Tab>Status</Tab>
	</TabList>

	<TabView>
		<div class="section-wrapper">
			<Section title="Status" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Pods scheduled</label>
						<span>{status?.currentNumberScheduled}</span>
					</div>

					<div class="section-element">
						<label>Pods available</label>
						<span>{status?.numberAvailable}</span>
					</div>

					<div class="section-element">
						<label>Pods ready</label>
						<span>{status?.numberReady}</span>
					</div>

					<div class="section-element">
						<label>Pods misscheduled</label>
						<span>{status?.numberMisscheduled}</span>
					</div>
				</div>
			</Section>

			<Section title="Spec" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Number of containers</label>
						<span>{spec?.template?.spec?.containers.length}</span>
					</div>

					<div class="section-element">
						<label>Number of volumes</label>
						<span>{spec?.template?.spec?.volumes?.length}</span>
					</div>

					<div class="section-element">
						<label>Restart policy</label>
						<span>{spec?.template?.spec?.restartPolicy}</span>
					</div>

					<div class="section-element">
						<label>Host network</label>
						<span>{spec?.template?.spec?.hostNetwork ? 'yes' : 'no'}</span>
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
		<JsonViewer json={daemonset.metadata} />
	</TabView>

	<TabView>
		<JsonViewer json={daemonset.spec} />
	</TabView>

	<TabView>
		<JsonViewer json={daemonset.status} />
	</TabView>
</Tabs>
