<script lang="ts">
	import Dialog from '$lib/components/Dialog.svelte';
	import JsonViewer from '$lib/components/JsonViewer.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Table from '$lib/components/Table.svelte';
	import Certificate from '$lib/icons/certificate.svelte';
	import type { HttpEndpoint } from '$lib/interfaces/health';
	import { daysUntil } from '$lib/utils/conversion';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const httpHealth: HttpEndpoint[] = data?.httpHealth;
	let selectedSSL = $state(null);
</script>

<PageHeader>Health</PageHeader>

<Table
	title="Domains list"
	description="All of the verified domains below point to this application and are covered by free Cloudflare SSL certificates for a secure HTTPS connection. The DNS records for the domains must be set up correctly for them to work."
	columns={['Domain', 'SSL', 'Status', 'Code']}
>
	<tbody slot="tbody">
		{#each httpHealth as row, i (row)}
			<tr>
				<td>{row.domain}</td>
				<td>
					{#if row['ssl']['valid_to']}
						<div
							on:click={() => (selectedSSL = row['ssl'])}
							style="display: flex; cursor: pointer;"
						>
							<div style="height: 1.4rem; width: 1.4rem;">
								<Certificate />
							</div>
							<span>{daysUntil(row['ssl']['valid_to'])} days left</span>
						</div>
					{:else}
						<span>(none)</span>
					{/if}
				</td>
				<td>{row.status}</td>
				<td>{row.code}</td>
			</tr>
		{/each}
	</tbody>
</Table>

{#if selectedSSL !== null}
	<Dialog on:close={() => (selectedSSL = null)} title="SSL Certificate info">
		<JsonViewer json={selectedSSL} />
	</Dialog>
{/if}
