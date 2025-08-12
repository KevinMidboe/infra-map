<script lang="ts">
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PodDescribe from '$lib/components/kube-describe/Pod.svelte';
	import DeploymentDescribe from '$lib/components/kube-describe/Deployment.svelte';
	import DaemonSetDescribe from '$lib/components/kube-describe/DaemonSet.svelte';
	import type { PageData } from './$types';
	import type { V1Pod } from '@kubernetes/client-node';

	let { data }: { data: PageData } = $props();
	const { error, kind } = data;
	const { resource }: { pod: V1Pod | undefined } = data;
</script>

<PageHeader>{kind || 'Resource'}: {resource?.metadata?.name || 'not found'}</PageHeader>

{#if error}
	<p>{error}</p>
{/if}

{#if resource}
	{#if kind == 'pod'}
		<PodDescribe pod={resource} />
	{:else if kind == 'deployment' || kind == 'replicaset'}
		<DeploymentDescribe deployment={resource} />
	{:else if kind == 'daemonset'}
		<DaemonSetDescribe daemonset={resource} />
	{:else}
		<PodDescribe pod={resource} />
	{/if}
{:else}
	<h2>404. '{kind}' resource not found!</h2>
{/if}
