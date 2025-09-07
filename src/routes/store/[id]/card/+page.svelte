<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { ProductInfoDataOption, type Product } from '$lib/helpers/helpers-data-options';
	import ProductCard from '$lib/components/product/card/ProductCard.svelte';
	import Subscription from '$lib/components/home/Subscription/Subscription.svelte';

	let isMobile = false;
	let product: Product = {
		id: 0,
		title: '',
		price: 0,
		image: '',
		description: '',
		ingredients: []
	};

	onMount(() => {
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		const productId = $page.params.id;
		if (productId && ProductInfoDataOption[productId]) {
			product = ProductInfoDataOption[productId];
		} else {
			goto('/404');
		}

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});
</script>

<svelte:head>
	<title>{product?.title || 'Product'} - Picmi</title>
</svelte:head>

<div class="product-page">
	<main class="main-content">
		<div class="breadcrumb">
			<a href="/">HOME</a> • <a href="/store">STORE</a> • <span>{product.title}</span>
		</div>
		<ProductCard {product} />
		<Subscription />
	</main>
</div>

<style>
	.breadcrumb {
		font-size: 14px;
		color: #666;
		margin: 20px 0;
	}
	.breadcrumb a {
		color: #6c6c6c;
		text-decoration: none;
	}
	.main-content {
		max-width: 1600px;
		margin: 0 auto;
		padding: 60px 40px;
	}
</style>
