<script lang="ts">
	import Subscription from '$lib/components/home/Subscription/Subscription.svelte';
	import ProductList from '$lib/components/product/list/ProductList.svelte';
</script>

<svelte:head>
	<title>Store - Picmi</title>
</svelte:head>

<div class="store-page">
	<main class="main-content">
		<div class="breadcrumb">
			<a href="/home">HOME</a> • <span>STORE</span>
		</div>
		<ProductList />
		<Subscription />
	</main>
</div>

<style>
	.store-page {
		min-height: 100vh;
		background: #fff;
	}
	.main-content {
		max-width: 1600px;
		margin: 0 auto;
		padding: 60px 40px;
	}
	.breadcrumb {
		font-size: 14px;
		color: #666;
		margin: 20px 0;
	}
	.breadcrumb a {
		color: #6c6c6c;
		text-decoration: none;
	}
</style>
