<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<PageHeader>Sites</PageHeader>

<div class="section-wrapper">
	<Section
		title="Expose HTTP traffic"
		description="You can reach your Application on a specific Port you configure, redirecting all your domains to it. You can make it Private by disabling HTTP traffic."
	/>

	<Section
		title="IP restrictions"
		description="Restrict or block access to your application based on specific IP addresses or CIDR blocks."
	/>

	<Section
		title="Expose HTTP traffic"
		description="You can reach your Application on a specific Port you configure, redirecting all your domains to it. You can make it Private by disabling HTTP traffic."
	/>

	<Section
		title="Connected services"
		description="Connected services can communicate with your application over the private network."
	/>
</div>
