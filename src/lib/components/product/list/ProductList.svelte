<script lang="ts">
	// ProductList

	import { goto } from '$app/navigation';
	import { ProductsListDataOption, type Product } from '$lib/helpers/helpers-data-options';
	import { onMount } from 'svelte';

	const categoriesTabs = [
		{ id: 'all', name: 'All' },
		{ id: 'chocolate', name: 'Chocolate' },
		{ id: 'merch', name: 'Merch' }
	];

	let currentCategory = 'all';
	let currentPage = 1;
	let displayedItems = 12;

	const ITEMS_PER_PAGE_DESKTOP = 12;
	const ITEMS_PER_PAGE_MOBILE = 4;
	const MOBILE_BREAKPOINT = 670;

	let isMobile = false;

	$: currentItemsPerPage = isMobile 
		? ITEMS_PER_PAGE_MOBILE 
		: ITEMS_PER_PAGE_DESKTOP;

	const changeCategory = (categoryId: string): void => {
		currentCategory = categoryId;
		currentPage = 1;
		displayedItems = currentItemsPerPage;
	}

	const changePage = (page: number): void => {
		currentPage = page;
		displayedItems = page * currentItemsPerPage;
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const loadMore = (): void => {
		displayedItems += currentItemsPerPage;
	}

	const goToProduct = (product: Product): void  => {
		goto(`/store/${product.id}/card`);
	}

	$: filteredProducts = ProductsListDataOption.filter((product) => {
		const title = product.title.toLowerCase();

		if (currentCategory === 'chocolate') {
			return title.includes('choco') || title.includes('mg-4000');
		}
		if (currentCategory === 'merch') {
			return (
				title.includes('cap') ||
				title.includes('bag') ||
				title.includes('shirt') ||
				title.includes('sweatshirt') ||
				title.includes('longsleeve') ||
				title.includes('tote')
			);
		}
		return true;
	});

	$: totalPages = Math.ceil(filteredProducts.length / currentItemsPerPage);
	$: currentProducts = isMobile
		? filteredProducts.slice(0, displayedItems)
		: filteredProducts.slice(
				(currentPage - 1) * currentItemsPerPage,
				currentPage * currentItemsPerPage
			);

	onMount(() => {
		const checkMobile = () => {
			const wasMobile = isMobile;
			isMobile = window.innerWidth <= MOBILE_BREAKPOINT;

			if (wasMobile !== isMobile) {
				displayedItems = currentItemsPerPage;
				currentPage = 1;
			}
		};

		checkMobile();
		window.addEventListener('resize', checkMobile);

		return () => window.removeEventListener('resize', checkMobile);
	});
</script>

<div class="catalogue-header">
	<h1 class="catalogue-title">Catalogue</h1>
	<div class="category-tabs">
		{#each categoriesTabs as category}
			<button
				class="category-tab {currentCategory === category.id ? 'active' : ''}"
				on:click={() => changeCategory(category.id)}
			>
				{category.name}
			</button>
		{/each}
	</div>
</div>

<div class="products-grid">
	{#each currentProducts as product}
		<div class="product-card" on:click={() => goToProduct(product)}>
			<div class="product-image">
				<img src={product.image} alt={product.title} />
			</div>
			<div class="product-info">
				<h3 class="product-title">{product.title}</h3>
				<div class="product-price">{product.price} $</div>
			</div>
		</div>
	{/each}
</div>

{#if !isMobile && totalPages > 1}
	<div class="pagination">
		{#each Array(totalPages) as _, i}
			<button
				class="page-btn {currentPage === i + 1 ? 'active' : ''}"
				on:click={() => changePage(i + 1)}
			>
				{i + 1}
			</button>
		{/each}
		{#if currentPage < totalPages}
			<button class="page-btn next" on:click={() => changePage(currentPage + 1)}> → </button>
		{/if}
	</div>
{/if}

{#if isMobile && displayedItems < filteredProducts.length}
	<div class="load-more-section">
		<button class="load-more-btn" on:click={loadMore}>LOAD MORE</button>
	</div>
{/if}

<style>
	.catalogue-header {
		margin-bottom: 30px;
	}
	.catalogue-title {
		font-family: var(--font-decorative);
		font-size: 64px;
		font-weight: 500;
		color: #000000;
		margin-bottom: 30px;
	}
	.category-tabs {
		display: flex;
		gap: 15px;
	}
	.category-tab {
		background: none;
		border: 2px solid #eee;
		border-radius: 25px;
		padding: 12px 24px;
		font-size: 16px;
		font-weight: 400;
		color: #666;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.category-tab:hover {
		border-color: #8273ef;
	}
	.category-tab.active {
		border-color: #8273ef;
		color: #8273ef;
	}

	.products-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 30px;
		margin-bottom: 60px;
		justify-content: flex-start;
	}
	.product-card {
		flex: 0 0 calc(25% - 22.5px);
		max-width: calc(25% - 22.5px);
		min-width: 280px;
		background: white;
		border-radius: 20px;
		overflow: hidden;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.product-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
	}
	.product-image {
		position: relative;
		background: #fbfbfb;
		padding: 30px;
		text-align: center;
	}
	.product-image img {
		width: 100%;
		height: auto;
		border-radius: 10px;
		max-height: 200px;
		object-fit: contain;
	}
	.product-info {
		padding: 20px;
	}
	.product-title {
		font-size: 22px;
		font-weight: 500;
		color: #474747;
		margin-bottom: 10px;
		line-height: 1.4;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
	}
	.product-price {
		font-size: 28px;
		font-weight: 700;
		color: #333333;
	}

	.pagination {
		display: flex;
		justify-content: start;
		gap: 10px;
		margin-bottom: 40px;
	}
	.page-btn {
		background: none;
		border: 2px solid #eee;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		font-size: 16px;
		font-weight: 600;
		color: #666;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.page-btn:hover {
		border-color: #8273ef;
		color: #8273ef;
	}
	.page-btn.active {
		background: #8273ef;
		border-color: #8273ef;
		color: white;
	}
	.page-btn.next {
		border-radius: 20px;
		width: 40px;
	}

	.load-more-section {
		text-align: center;
		margin-bottom: 60px;
	}
	.load-more-btn {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 15px 40px;
		font-size: 16px;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
	}
	.load-more-btn:hover {
		background: #6b5bd6;
		transform: translateY(-2px);
	}

	@media (max-width: 1290px) {
		.product-card {
			flex: 0 0 calc(33.333% - 20px);
			max-width: calc(33.333% - 20px);
		}
	}

	@media (max-width: 980px) {
		.product-card {
			flex: 0 0 calc(50% - 15px);
			max-width: calc(50% - 15px);
		}
	}

	@media (max-width: 670px) {
		.catalogue-title {
			font-size: 36px;
			margin-bottom: 15px;
		}
		.product-card {
			flex: 0 0 100%;
			max-width: 100%;
		}
		.product-title {
			font-size: 20px;
		}
	}
</style>
