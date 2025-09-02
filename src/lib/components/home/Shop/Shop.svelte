<script lang="ts">
	import { goto } from '$app/navigation';

	// Shop

	import { ProductsListDataOption, type Product } from '$lib/helpers/helpers-data-options';
	import { onMount } from 'svelte';

	let current = 0;
	let itemsPerView = 4;
	let isDesktop = false;

	let startX = 0;
	let isDragging = false;

	$: itemsCounter = ProductsListDataOption.length || 0;

	const updateItemsPerView = () => {
		const w = window.innerWidth;
		if (w < 540) {
			itemsPerView = 1.2;
			isDesktop = false;
		} else if (w < 992) {
			itemsPerView = 2;
			isDesktop = false;
		} else if (w < 1200) {
			itemsPerView = 3;
			isDesktop = true;
		} else {
			itemsPerView = 4;
			isDesktop = true;
		}

		const maxIndex = Math.max(0, itemsCounter - Math.ceil(itemsPerView));
		if (current > maxIndex) current = maxIndex;
	};

	onMount(() => {
		updateItemsPerView();
		window.addEventListener('resize', updateItemsPerView);
		return () => window.removeEventListener('resize', updateItemsPerView);
	});

	const next = () => {
		if (current < itemsCounter - Math.ceil(itemsPerView)) current++;
	};

	const prev = () => {
		if (current > 0) current--;
	};

	// Touch
	const handleTouchStart = (e: TouchEvent) => {
		startX = e.touches[0].clientX;
	};
	const handleTouchEnd = (e: TouchEvent) => {
		const endX = e.changedTouches[0].clientX;
		if (endX < startX - 50) next();
		if (endX > startX + 50) prev();
	};

	// Mouse drag
	const handleMouseDown = (e: MouseEvent) => {
		if (!isDesktop) return;
		isDragging = true;
		startX = e.clientX;
	};
	const handleMouseUp = (e: MouseEvent) => {
		if (!isDesktop || !isDragging) return;
		isDragging = false;
		const endX = e.clientX;
		if (endX < startX - 50) next();
		if (endX > startX + 50) prev();
	};

	const goToStore = () => {
		goto('/store');
	};
	const handleSlideClick = (item: Product) => {
		goto(`/store/${item.id}/card`);
	};
</script>

<section class="shop">
	<div class="shop-header">
		<h2 class="shop-title">Shop chocolate & new apparel</h2>
		<div class="shop-control-buttons">
			{#if isDesktop}
				<button class="btn view-more" on:click={goToStore}>
					{itemsCounter} MORE ITEMS
				</button>
				<button class="btn circle prev" on:click={prev}>
					<img class="arrow" src="/assets/icons/arrow-left.svg" alt="left" />
				</button>
				<button class="btn circle next" on:click={next}>
					<img class="arrow" src="/assets/icons/arrow-right.svg" alt="right" />
				</button>
			{/if}
		</div>
	</div>

	<div class="slider-wrapper">
		<div
			class="slides"
			style="transform: translateX(-{current * (100 / itemsPerView)}%);"
			on:touchstart={handleTouchStart}
			on:touchend={handleTouchEnd}
			on:mousedown={handleMouseDown}
			on:mouseup={handleMouseUp}
		>
			{#each ProductsListDataOption as p}
				<div
					class="slide"
					style="flex: 0 0 calc(100% / {itemsPerView})"
					on:click={() => handleSlideClick(p)}
				>
					<img class="slide-image" src={p.image} alt={p.title} />
					<h3 class="slide-title">{p.title}</h3>
					<p class="slide-price">{p.price} $</p>
				</div>
			{/each}
		</div>
	</div>

	{#if !isDesktop}
		<button class="btn view-more center" on:click={goToStore}>
			{itemsCounter} MORE ITEMS
		</button>
	{/if}
</section>

<style>
	.shop {
		max-width: 1600px;
		margin: 40px auto 120px auto;
	}

	.shop-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.shop-title {
		font-family: var(--font-decorative);
		font-size: 68px;
		font-weight: normal;
		max-width: 545px;
	}
	.shop-control-buttons {
		display: flex;
		width: auto;
		align-items: center;
		gap: 20px;
	}

	/* Базовые кнопки */
	.btn {
		cursor: pointer;
		border-radius: 40px;
		font-size: 20px;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.btn.view-more {
		background: none;
		color: #8273ef;
		border: 1px solid #8273ef;
		padding: 16px 40px;
	}
	.btn.view-more:hover {
		color: #968af2;
		border-color: #968af2;
	}
	.btn.view-more:active {
		color: #6d61c9;
		border-color: #6d61c9;
	}

	.btn.circle {
		background: #fff;
		border: 1px solid #ccc;
		border-radius: 50%;
		width: 64px;
		height: 64px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn.circle:hover {
		border-color: #968af2;
	}
	.btn.circle:active {
		border-color: #6d61c9;
	}

	.slider-wrapper {
		position: relative;
		overflow: hidden;
		height: 550px;
	}
	.slides {
		display: flex;
		transition: transform 0.3s ease;
	}

	.slide {
		padding: 10px;
		text-align: center;
		box-sizing: border-box;
	}
	.slide-title {
		font-size: 22px;
		font-weight: 400;
		text-align: left;
		color: #474747;
	}
	.slide-image {
		width: 320px;
		height: 320px;
		border-radius: 8px;
		transition: all 0.3s ease;
		cursor: pointer;
	}
	.slide:hover .slide-image {
		width: 385px;
		height: 385px;
		transform: scale(1.1);
	}
	.slide-price {
		font-size: 28px;
		font-weight: 500;
		text-align: left;
		color: #000;
		margin: 0;
	}

	.center {
		display: block;
		margin: 20px auto 0;
		text-align: center;
		width: fit-content;
	}

	/* Медиа запросы — укороченные, без дубликатов */
	@media (max-width: 1700px) {
		.shop {
			max-width: 1380px;
			margin: 40px auto;
		}
		.slide-image {
			width: 280px;
			height: 280px;
		}
		.slide:hover .slide-image {
			width: 325px;
			height: 325px;
		}
	}
	@media (max-width: 1400px) {
		.shop {
			max-width: 970px;
		}
		.shop-title {
			font-size: 54px;
			max-width: 435px;
		}
		.btn.view-more {
			font-size: 16px;
			padding: 14px 30px;
		}
		.btn.circle {
			width: 50px;
			height: 50px;
		}
		.slider-wrapper {
			height: 380px;
		}
		.slide-title {
			font-size: 16px;
		}
		.slide-image {
			width: 190px;
			height: 190px;
		}
		.slide:hover .slide-image {
			width: 220px;
			height: 220px;
		}
		.slide-price {
			font-size: 21px;
		}
	}
	@media (max-width: 1199px) {
		.slide-image {
			width: 250px;
			height: 250px;
		}
		.slide:hover .slide-image {
			width: 300px;
			height: 300px;
		}
		.slider-wrapper {
			height: 500px;
		}
	}
	@media (max-width: 991px) {
		.shop {
			max-width: 750px;
		}
		.slide-image {
			width: 300px;
			height: 300px;
		}
		.slide:hover .slide-image {
			width: 340px;
			height: 340px;
		}
	}
	@media (max-width: 768px) {
		.shop {
			max-width: 520px;
			margin: 30px auto;
		}
		.shop-title {
			font-size: 45px;
			max-width: 400px;
		}
		.slide-image {
			width: 200px;
			height: 200px;
		}
		.slide:hover .slide-image {
			width: 264px;
			height: 264px;
		}
		.slider-wrapper {
			height: 420px;
		}
	}
	@media (max-width: 540px) {
		.shop {
			max-width: 360px;
		}
		.shop-title {
			font-size: 36px;
			max-width: 290px;
		}
		.slide-image {
			width: 300px;
			height: 300px;
		}
		.slide:hover .slide-image {
			width: 300px;
			height: 300px;
		}
		.slider-wrapper {
			height: 465px;
			padding-right: 20px;
		}
		.slide {
			flex: 0 0 83.333%;
		}
		.slide-title {
			font-size: 20px;
		}
		.slide-price {
			font-size: 28px;
		}
	}
</style>
