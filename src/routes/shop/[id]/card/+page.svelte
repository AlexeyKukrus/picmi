<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	interface Product {
		id: string;
		title: string;
		price: number;
		image: string;
		status: 'available' | 'sold-out';
		description: string;
		ingredients: string[];
	}

	let isMobile = false;
	let product: Product | null = null;

	// Моковые данные продукта
	const mockProduct: Product = {
		id: '1',
		title: 'Picmi White-Choco with Caramel Macchiato',
		price: 59,
		image: '/assets/products/choco.png',
		status: 'sold-out',
		description: 'This indulgent chocolate bar features the creamy smoothness of white chocolate blended with chunks of chocolate cookies, offering a perfect balance of sweetness and crunch. Each bite is a heavenly experience, capturing the essence of your favorite cookies and cream dessert.',
		ingredients: [
			'Organic Lion\'s Mane (Hericium erinaceus)',
			'Organic Reishi (Ganoderma lucidum s.l.)',
			'Organic Turkey Tail (Trametes versicolor)',
			'Organic Cordyceps (Cordyceps militaris)'
		]
	};

	onMount(() => {
		// Определяем мобильное устройство
		const checkMobile = () => {
			isMobile = window.innerWidth <= 768;
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		// Получаем данные продукта (в реальном приложении здесь был бы API запрос)
		product = mockProduct;

		return () => {
			window.removeEventListener('resize', checkMobile);
		};
	});

	function handleBack(): void {
		goto('/shop');
	}

	function handleNotifyMe(): void {
		// Логика уведомления о поступлении
		console.log('Notify me clicked');
	}

	function handleSignIn(): void {
		// Логика подписки на рассылку
		console.log('Sign in clicked');
	}
</script>

<svelte:head>
	<title>{product?.title || 'Product'} - Picmi</title>
</svelte:head>

{#if product}
	<!-- Desktop Version -->
	{#if !isMobile}
		<div class="product-page desktop">
			<!-- Header -->
			<header class="header">
				<nav class="nav">
					<div class="nav-left">
						<a href="/store">STORE</a>
						<a href="/about">ABOUT</a>
						<a href="/contact">CONTACT</a>
					</div>
					<div class="nav-center">
						<a href="/" class="logo">picmi</a>
					</div>
					<div class="nav-right">
						<button class="cart-icon">🛒</button>
					</div>
				</nav>
				<div class="breadcrumb">
					<a href="/">HOME</a> > <a href="/store">STORE</a> > <span>{product.title}</span>
				</div>
			</header>

			<!-- Main Content -->
			<main class="main-content">
				<div class="product-container">
					<!-- Product Image -->
					<div class="product-image-section">
						<div class="product-box">
							<img src={product.image} alt={product.title} />
						</div>
					</div>

					<!-- Product Details -->
					<div class="product-details">
						<h1 class="product-title">{product.title}</h1>
						<div class="price-status">
							<span class="price">${product.price}</span>
							<span class="status sold-out">SOLD OUT</span>
						</div>
						<button class="notify-btn" on:click={handleNotifyMe}>
							NOTIFY ME WHEN IT'S AVAILABLE
						</button>

						<div class="description">
							<h3>Description</h3>
							<p>{product.description}</p>
						</div>

						<div class="ingredients">
							<h3>500 Mg - Proprietary Functional Organic Polka Blend</h3>
							<ul>
								{#each product.ingredients as ingredient}
									<li>{ingredient}</li>
								{/each}
							</ul>
						</div>

						<div class="important">
							<h3>IMPORTANT</h3>
							<p>This product <strong>DOES NOT</strong> contain Psilocybin.</p>
						</div>

						<div class="disclaimer">
							<h3>Disclaimer</h3>
							<p>This product has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
							<p>Please keep out of reach of children and pets.</p>
						</div>
					</div>
				</div>
			</main>

			<!-- Newsletter -->
			<section class="newsletter">
				<div class="newsletter-content">
					<h3>Subscribe to our newsletter</h3>
					<form class="newsletter-form">
						<input type="email" placeholder="Your e-mail" required />
						<button type="submit">SIGN IN</button>
					</form>
				</div>
			</section>

			<!-- Footer -->
			<footer class="footer">
				<div class="footer-content">
					<div class="footer-logo">
						<div class="logo">picmi</div>
						<div class="rainbow-line"></div>
					</div>
					<div class="footer-links">
						<div class="link-group">
							<h4>MAIN MENU</h4>
							<a href="/">Home</a>
							<a href="/store">Store</a>
							<a href="/wholesale">Wholesale</a>
							<a href="/coa">COA</a>
							<a href="/contact">Contact</a>
						</div>
						<div class="link-group">
							<h4>POLICIES</h4>
							<a href="/privacy">Privacy Policy</a>
							<a href="/refund">Refund Policy</a>
							<a href="/shipping">Shipping Policy</a>
							<a href="/terms">Terms of service</a>
						</div>
					</div>
				</div>
				<div class="footer-legal">
					<p>Picmi Is A Registered Trademark Of DPGC Group © Picmi 2025</p>
					<p>ALL RIGHTS RESERVED.</p>
				</div>
			</footer>
		</div>

	<!-- Mobile Version -->
	{:else}
		<div class="product-page mobile">
			<!-- Header -->
			<header class="header">
				<nav class="nav">
					<button class="menu-btn">☰</button>
					<div class="logo">picmi</div>
					<button class="cart-btn">🛒</button>
				</nav>
				<button class="back-btn" on:click={handleBack}>
					← BACK
				</button>
			</header>

			<!-- Product Image -->
			<div class="product-image">
				<img src={product.image} alt={product.title} />
			</div>

			<!-- Product Details -->
			<div class="product-details">
				<h1 class="product-title">{product.title}</h1>
				<div class="price-status">
					<span class="price">${product.price}</span>
					<span class="status sold-out">SOLD OUT</span>
				</div>
				<button class="notify-btn" on:click={handleNotifyMe}>
					NOTIFY ME WHEN IT'S AVAILABLE
				</button>

				<div class="description">
					<h3>Description</h3>
					<p>{product.description}</p>
				</div>

				<div class="ingredients">
					<h3>500 Mg - Proprietary Functional Organic Polka Blend</h3>
					<ul>
						{#each product.ingredients as ingredient}
							<li>{ingredient}</li>
						{/each}
					</ul>
				</div>

				<div class="important">
					<h3>IMPORTANT</h3>
					<p>This product <strong>DOES NOT</strong> contain Psilocybin.</p>
				</div>

				<div class="disclaimer">
					<h3>Disclaimer</h3>
					<p>This product has not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
					<p>Please keep out of reach of children and pets.</p>
				</div>
			</div>

			<!-- Newsletter -->
			<section class="newsletter">
				<h3>Subscribe to our newsletter</h3>
				<form class="newsletter-form">
					<input type="email" placeholder="Your e-mail" required />
					<button type="submit">SIGN IN</button>
				</form>
			</section>

			<!-- Footer -->
			<footer class="footer">
				<div class="footer-logo">
					<div class="logo">picmi</div>
					<div class="rainbow-line"></div>
				</div>
				<div class="footer-links">
					<div class="link-group">
						<h4>MAIN MENU</h4>
						<a href="/">Home</a>
						<a href="/store">Store</a>
						<a href="/wholesale">Wholesale</a>
						<a href="/coa">COA</a>
						<a href="/contact">Contact</a>
					</div>
					<div class="link-group">
						<h4>POLICIES</h4>
						<a href="/privacy">Privacy Policy</a>
						<a href="/refund">Refund Policy</a>
						<a href="/shipping">Shipping Policy</a>
						<a href="/terms">Terms of service</a>
					</div>
				</div>
				<div class="footer-legal">
					<p>Picmi Is A Registered Trademark of DPGC Group © Picmi 2025</p>
					<p>ALL RIGHTS RESERVED.</p>
				</div>
			</footer>
		</div>
	{/if}
{/if}

<style>
	/* Desktop Styles */
	.desktop {
		min-height: 100vh;
		background: #fff;
	}

	.desktop .header {
		padding: 20px 40px;
		border-bottom: 1px solid #eee;
	}

	.desktop .nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.desktop .nav-left {
		display: flex;
		gap: 30px;
	}

	.desktop .nav-left a {
		color: #333;
		text-decoration: none;
		font-weight: 600;
	}

	.desktop .nav-center .logo {
		font-size: 24px;
		font-weight: 800;
		color: #333;
		text-decoration: none;
	}

	.desktop .nav-right .cart-icon {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		cursor: pointer;
	}

	.desktop .breadcrumb {
		font-size: 14px;
		color: #666;
	}

	.desktop .breadcrumb a {
		color: #8273ef;
		text-decoration: none;
	}

	.desktop .main-content {
		max-width: 1200px;
		margin: 0 auto;
		padding: 60px 40px;
	}

	.desktop .product-container {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 80px;
		align-items: start;
	}

	.desktop .product-image-section {
		position: relative;
	}

	.desktop .product-box {
		background: #f0f8f0;
		padding: 40px;
		border-radius: 20px;
		transform: rotate(-5deg);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
	}

	.desktop .product-box img {
		width: 100%;
		height: auto;
		border-radius: 10px;
	}

	.desktop .product-details {
		padding: 20px 0;
	}

	.desktop .product-title {
		font-family: var(--font-decorative);
		font-size: 36px;
		font-weight: 700;
		color: #333;
		margin-bottom: 20px;
		line-height: 1.2;
	}

	.desktop .price-status {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 30px;
	}

	.desktop .price {
		font-size: 24px;
		font-weight: 700;
		color: #333;
	}

	.desktop .status.sold-out {
		color: #999;
		font-size: 16px;
	}

	.desktop .notify-btn {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 15px 30px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		margin-bottom: 40px;
		transition: background 0.3s ease;
	}

	.desktop .notify-btn:hover {
		background: #6b5bd6;
	}

	.desktop .description,
	.desktop .ingredients,
	.desktop .important,
	.desktop .disclaimer {
		margin-bottom: 30px;
	}

	.desktop h3 {
		font-size: 18px;
		font-weight: 700;
		color: #333;
		margin-bottom: 15px;
	}

	.desktop p {
		font-size: 16px;
		line-height: 1.6;
		color: #666;
		margin-bottom: 10px;
	}

	.desktop ul {
		list-style: none;
		padding: 0;
	}

	.desktop li {
		font-size: 16px;
		line-height: 1.6;
		color: #666;
		margin-bottom: 8px;
		padding-left: 20px;
		position: relative;
	}

	.desktop li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #8273ef;
	}

	.desktop .newsletter {
		background: linear-gradient(135deg, #e8f5e8 0%, #d4f0d4 100%);
		padding: 60px 40px;
		margin: 60px 0;
	}

	.desktop .newsletter-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.desktop .newsletter h3 {
		font-family: var(--font-decorative);
		font-size: 28px;
		color: #2d5a2d;
		margin: 0;
	}

	.desktop .newsletter-form {
		display: flex;
		gap: 15px;
	}

	.desktop .newsletter-form input {
		padding: 12px 20px;
		border: 1px solid #ddd;
		border-radius: 25px;
		font-size: 16px;
		min-width: 250px;
	}

	.desktop .newsletter-form button {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 12px 25px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
	}

	.desktop .footer {
		background: #333;
		color: white;
		padding: 60px 40px 30px;
	}

	.desktop .footer-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		margin-bottom: 40px;
	}

	.desktop .footer-logo .logo {
		font-size: 36px;
		font-weight: 800;
		margin-bottom: 10px;
	}

	.desktop .rainbow-line {
		height: 3px;
		background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
		border-radius: 2px;
	}

	.desktop .footer-links {
		display: flex;
		gap: 60px;
	}

	.desktop .link-group h4 {
		font-size: 16px;
		font-weight: 700;
		margin-bottom: 15px;
		color: #ccc;
	}

	.desktop .link-group a {
		display: block;
		color: #fff;
		text-decoration: none;
		margin-bottom: 8px;
		font-size: 14px;
	}

	.desktop .footer-legal {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		padding-top: 30px;
		border-top: 1px solid #555;
		font-size: 12px;
		color: #ccc;
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

	.mobile .footer {
		background: #333;
		color: white;
		padding: 40px 20px 30px;
	}

	.mobile .footer-logo {
		text-align: center;
		margin-bottom: 30px;
	}

	.mobile .footer-logo .logo {
		font-size: 28px;
		font-weight: 800;
		margin-bottom: 10px;
	}

	.mobile .rainbow-line {
		height: 2px;
		background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
		border-radius: 1px;
		margin: 0 auto;
		width: 100px;
	}

	.mobile .footer-links {
		display: flex;
		justify-content: space-between;
		margin-bottom: 30px;
	}

	.mobile .link-group h4 {
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 12px;
		color: #ccc;
	}

	.mobile .link-group a {
		display: block;
		color: #fff;
		text-decoration: none;
		margin-bottom: 6px;
		font-size: 12px;
	}

	.mobile .footer-legal {
		text-align: center;
		padding-top: 20px;
		border-top: 1px solid #555;
		font-size: 10px;
		color: #ccc;
	}

	.mobile .footer-legal p {
		margin-bottom: 5px;
	}

	/* Responsive breakpoints */
	@media (max-width: 768px) {
		.desktop {
			display: none;
		}
	}

	@media (min-width: 769px) {
		.mobile {
			display: none;
		}
	}
</style>
