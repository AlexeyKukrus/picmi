<script lang="ts">
	import '$lib/styles/globals.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import { page } from '$app/stores';

	let { children } = $props();
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
</svelte:head>

<Header />
{@render children?.()}

{#if $page.url.pathname !== '/'}
	<Footer />
{/if}
