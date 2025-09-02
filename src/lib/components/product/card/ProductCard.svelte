<script lang="ts">
	// ProductCard

	import { type Product } from '$lib/helpers/helpers-data-options';

	export let product: Product = {
		id: 0,
		title: '',
		price: 0,
		image: '',
		description: '',
		ingredients: []
	};

	const handleNotifyMe = (): void => {
		console.log('Notify me clicked');
	};
</script>

<div class="product-container">
	<div class="product-image-section">
		<div class="product-box">
			<img src={product.image} alt={product.title} />
		</div>
	</div>

	<div class="product-details">
		<h1 class="product-title">{product.title}</h1>

		<div class="price-status">
			<span class="price">${product.price}</span>
			<span class="status sold-out">SOLD OUT</span>
		</div>

		<button class="notify-btn" on:click={handleNotifyMe}> NOTIFY ME WHEN IT'S AVAILABLE </button>

		{#if product.description}
			<div class="description">
				<h3>Description</h3>
				<p>{product.description}</p>
			</div>
		{/if}

		{#if product.ingredients && product.ingredients.length > 0}
			<div class="ingredients">
				<h3>500 Mg - Proprietary Functional Organic Polka Blend</h3>
				<ul>
					{#each product.ingredients as ingredient}
						<li>{ingredient}</li>
					{/each}
				</ul>
			</div>
		{/if}

		<div class="important">
			<h3>IMPORTANT</h3>
			<p>This product <strong>DOES NOT</strong> contain Psilocybin.</p>
		</div>

		<div class="disclaimer">
			<h3>Disclaimer</h3>
			<p>
				This product has not been evaluated by the Food and Drug Administration. This product is not
				intended to diagnose, treat, cure, or prevent any disease.
			</p>
			<p>Please keep out of reach of children and pets.</p>
		</div>
	</div>
</div>

<style>
	.product-container {
		display: flex;
		gap: 80px;
	}
	.product-image-section {
		position: relative;
		max-width: 790px;
		max-height: 790px;
	}
	.product-box {
		background: #fbfbfb;
		padding: 40px;
		border-radius: 20px;
	}
	.product-box img {
		width: 100%;
		height: auto;
		border-radius: 10px;
	}
	.product-title {
		font-family: var(--font-decorative);
		font-size: 56px;
		font-weight: 500;
		color: #000000;
		margin: 20px 0;
		line-height: 1;
	}
	.price-status {
		display: flex;
		align-items: center;
		gap: 15px;
		margin-bottom: 30px;
	}
	.price {
		font-size: 40px;
		font-weight: 700;
		color: #333;
	}
	.status.sold-out {
		color: #b5b5b5;
		font-size: 40px;
	}
	.notify-btn {
		background: #8273ef;
		color: #ffffff;
		border: none;
		border-radius: 25px;
		padding: 16px 40px;
		font-size: 20px;
		font-weight: 400;
		cursor: pointer;
		margin-bottom: 40px;
		transition: background 0.3s ease;
	}
	.notify-btn:hover {
		background: #968af2;
	}
	.notify-btn:active {
		background: #6d61c9;
	}
	.description,
	.ingredients,
	.important,
	.disclaimer {
		margin-bottom: 30px;
	}
	h3 {
		font-size: 24px;
		font-weight: 600;
		color: #000000;
		margin-bottom: 5px;
		letter-spacing: -1px;
	}

	p {
		font-size: 20px;
		line-height: 1.4;
		color: #222222;
		letter-spacing: -1px;
		margin: 5px 0;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		font-size: 20px;
		line-height: 1.4;
		letter-spacing: -1px;
		color: #222222;
		padding-left: 20px;
		position: relative;
	}

	li::before {
		content: '•';
		position: absolute;
		left: 0;
		color: #222222;
	}
	@media (max-width: 1600px) {
		.product-image-section {
			max-width: 650px;
			max-height: 650px;
		}
	}
	@media (max-width: 1400px) {
		.product-container {
			gap: 40px;
		}
		.product-image-section {
			max-width: 550px;
			max-height: 550px;
		}
		.product-title {
			font-size: 40px;
		}
		.price {
			font-size: 34px;
		}
		.status.sold-out {
			font-size: 34px;
		}
	}
	@media (max-width: 1200px) {
		.product-image-section {
			max-width: 400px;
			max-height: 400px;
		}
		.product-title {
			font-size: 30px;
		}
		.price {
			font-size: 26px;
		}
		.status.sold-out {
			font-size: 26px;
		}
		.notify-btn {
			font-size: 18px;
			margin-bottom: 20px;
		}
		h3 {
			font-size: 21px;
		}
		p {
			font-size: 17px;
		}
		li {
			font-size: 17px;
			padding-left: 15px;
		}
	}
	@media (max-width: 991px) {
		.product-container {
			flex-direction: column;
			gap: 15px;
		}
		.product-image-section {
			max-width: 870px;
			max-height: 870px;
		}
		.product-title {
			font-size: 28px;
			margin: 20px 0;
		}
		.price-status {
			gap: 8px;
			margin-bottom: 20px;
		}
		.price {
			font-size: 24px;
		}
		.status.sold-out {
			font-size: 24px;
		}
		.notify-btn {
			font-size: 16px;
			padding: 16px 32px;
		}
		h3 {
			font-size: 20px;
		}
		p {
			font-size: 16px;
		}
		li {
			font-size: 16px;
			padding-left: 15px;
		}
	}
</style>
