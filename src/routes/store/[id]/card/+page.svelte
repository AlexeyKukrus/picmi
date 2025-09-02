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
			<a href="/home">HOME</a> • <a href="/store">STORE</a> • <span>{product.title}</span>
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

	/* Mobile Styles */
	.mobile {
		background: #fff;
		min-height: 100vh;
	}

	.mobile .header {
		padding: 15px 20px;
		border-bottom: 1px solid #eee;
	}

	.mobile .nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 15px;
	}

	.mobile .menu-btn,
	.mobile .cart-btn {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
		font-size: 18px;
	}

	.mobile .logo {
		font-size: 20px;
		font-weight: 800;
		color: #333;
	}

	.mobile .back-btn {
		background: none;
		border: none;
		color: #333;
		font-size: 16px;
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 5px;
	}

	.mobile .product-image {
		padding: 20px;
		text-align: center;
	}

	.mobile .product-image img {
		max-width: 100%;
		height: auto;
		border-radius: 15px;
	}

	.mobile .product-details {
		padding: 0 20px 40px;
	}

	.mobile .product-title {
		font-family: var(--font-decorative);
		font-size: 28px;
		font-weight: 700;
		color: #333;
		margin-bottom: 20px;
		line-height: 1.2;
	}

	.mobile .price-status {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 25px;
	}

	.mobile .price {
		font-size: 20px;
		font-weight: 700;
		color: #333;
	}

	.mobile .status.sold-out {
		color: #999;
		font-size: 14px;
	}

	.mobile .notify-btn {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 15px 25px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		margin-bottom: 30px;
		width: 100%;
	}

	.mobile .description,
	.mobile .ingredients,
	.mobile .important,
	.mobile .disclaimer {
		margin-bottom: 25px;
	}

	.mobile h3 {
		font-size: 16px;
		font-weight: 700;
		color: #333;
		margin-bottom: 12px;
	}

	.mobile p {
		font-size: 14px;
		line-height: 1.6;
		color: #666;
		margin-bottom: 8px;
	}

	.mobile ul {
		list-style: none;
		padding: 0;
	}

	.mobile li {
		font-size: 14px;
		line-height: 1.6;
		color: #666;
		margin-bottom: 6px;
		padding-left: 15px;
		position: relative;
	}

	.mobile li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #8273ef;
	}

	.mobile .newsletter {
		background: linear-gradient(135deg, #e8f5e8 0%, #d4f0d4 100%);
		padding: 30px 20px;
		margin: 0 20px 40px;
		border-radius: 15px;
	}

	.mobile .newsletter h3 {
		font-family: var(--font-decorative);
		font-size: 20px;
		color: #2d5a2d;
		margin-bottom: 20px;
		text-align: center;
	}

	.mobile .newsletter-form {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}

	.mobile .newsletter-form input {
		padding: 12px 20px;
		border: 1px solid #ddd;
		border-radius: 25px;
		font-size: 16px;
	}

	.mobile .newsletter-form button {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 12px 25px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}
</style>
