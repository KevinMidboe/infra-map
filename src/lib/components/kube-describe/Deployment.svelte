<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import Tab from '$lib/components/navigation/Tab.svelte';
	import Tabs from '$lib/components/navigation/Tabs.svelte';
	import TabList from '$lib/components/navigation/TabList.svelte';
	import TabView from '$lib/components/navigation/TabView.svelte';
	import Section from '$lib/components/Section.svelte';
	import JsonViewer from '$lib/components/JsonViewer.svelte';
	import type { V1Deployment } from '@kubernetes/client-node';

	const { deployment }: { deployment: V1Deployment } = $props();
	const { status, metadata, spec } = deployment || {};

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
						<label>Pods ready</label>
						<span>{status?.readyReplicas}</span>
					</div>

					<div class="section-element">
						<label>Pods available</label>
						<span>{status?.availableReplicas}</span>
					</div>

					<div class="section-element">
						<label>Replicas</label>
						<span>{status?.replicas}</span>
					</div>
				</div>
			</Section>

			<Section title="Metadata" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Namespace</label>
						<span>{metadata?.namespace}</span>
					</div>

					{#if metadata?.ownerReferences?.length || 0 > 0}
						<div class="section-element">
							<label>Parent pod</label>
							<a
								href={`/cluster/${metadata?.ownerReferences?.[0].kind.toLowerCase()}/${
									metadata?.ownerReferences?.[0].uid
								}`}
								sveltekit:reload><span>{metadata?.ownerReferences?.[0].kind}</span></a
							>
						</div>
					{/if}
				</div>
			</Section>

			<Section title="Spec" description="">
				<div class="section-row">
					<div class="section-element">
						<label>Number of containers</label>
						<span>{spec?.template?.spec?.containers.length}</span>
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
		<JsonViewer json={deployment.metadata} />
	</TabView>

	<TabView>
		<JsonViewer json={deployment.spec} />
	</TabView>

	<TabView>
		<JsonViewer json={deployment.status} />
	</TabView>
</Tabs>
