<script lang="ts">
	import '$lib/styles/globals.css';
	import Header from '$lib/components/layout/Header.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import AgeGate from '$lib/components/AgeGate.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { children } = $props();
	let showGate = $state(false);

	onMount(() => {
		showGate = !(browser && sessionStorage.getItem('isConfirmedUser') === 'true');
	});

	function onConfirm() {
		showGate = false;
	}

	$effect(() => {
		if (!browser) return;
		if (showGate) {
			document.documentElement.style.overflow = 'hidden';
			document.body.style.overflow = 'hidden';
		} else {
			document.documentElement.style.overflow = '';
			document.body.style.overflow = '';
		}
	});
</script>

<svelte:head>
	<!-- <link rel="icon" href={favicon} /> -->
</svelte:head>

<Header />
{@render children?.()}
{#if showGate}
	<AgeGate on:confirm={onConfirm} />
{/if}

<Footer />
