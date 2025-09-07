<script lang="ts">
	// Articles

	import { goto } from '$app/navigation';
	import { ArticlesListDataOption, type Article } from '$lib/helpers/helpers-data-options';
	import { onMount } from 'svelte';

	let current = 0;
	let itemsPerView = 3;
	let isDesktop = false;

	let startX = 0;
	let isDragging = false;

	$: itemsCounter = ArticlesListDataOption.length || 0;

	const updateItemsPerView = () => {
		const w = window.innerWidth;
		if (w < 540) {
			itemsPerView = 1.2;
			isDesktop = false;
		} else if (w < 992) {
			itemsPerView = 2;
			isDesktop = false;
		} else {
			itemsPerView = 3;
			isDesktop = true;
		}

		const maxIndex = Math.max(0, itemsCounter - Math.ceil(itemsPerView));
		if (current > maxIndex) current = maxIndex;
	};

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

	
	const handleSlideClick = (item: Article) => {
		goto(`/articles/${item.id}/view`);
	};

	onMount(() => {
		updateItemsPerView();
		window.addEventListener('resize', updateItemsPerView);
		return () => window.removeEventListener('resize', updateItemsPerView);
	});
</script>

<section class="articles">
	<div class="articles-header">
		<h2 class="articles-title">Articles</h2>
		<div class="articles-control-buttons">
			{#if isDesktop}
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
			{#each ArticlesListDataOption as p}
				<div
					class="slide"
					style="flex: 0 0 calc(100% / {itemsPerView}); background-image: url({p.background}); "
					on:click={() => handleSlideClick(p)}
				>
					<h3 class="slide-title">{p.title}</h3>
					<button>
						LEARN MORE
					</button>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.articles {
		max-width: 1600px;
		margin: 40px auto 120px auto;
	}

	.articles-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}

	.articles-title {
		font-family: var(--font-decorative);
		font-size: 68px;
		font-weight: normal;
		max-width: 545px;
	}
	.articles-control-buttons {
		display: flex;
		width: auto;
		align-items: center;
		gap: 20px;
	}

	.btn {
		cursor: pointer;
		border-radius: 40px;
		font-size: 20px;
		font-weight: 500;
		transition: all 0.2s ease;
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
		height: 600px;
	}
	.slides {
		display: flex;
		gap: 15px;
		transition: transform 0.3s ease;
	}

	.slide {
		padding: 40px;
		text-align: center;
		box-sizing: border-box;
		max-width: 520px;
		height: 600px;
		border-radius: 48px;
	}
	.slide-title {
		font-size: 48px;
		font-weight: 400;
		font-family: var(--font-decorative);
		text-align: left;
		color: #000000;
		max-width: 400px;
		margin: 0;
	}

	@media (max-width: 1700px) {
		.articles {
			max-width: 1380px;
			margin: 40px auto;
		}
	}
	@media (max-width: 1400px) {
		.articles {
			max-width: 970px;
		}
		.articles-title {
			font-size: 54px;
			max-width: 435px;
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
	}
	@media (max-width: 1199px) {
		.slider-wrapper {
			height: 500px;
		}
	}
	@media (max-width: 991px) {
		.articles {
			max-width: 750px;
		}
	}
	@media (max-width: 768px) {
		.articles {
			max-width: 520px;
			margin: 30px auto;
		}
		.articles-title {
			font-size: 45px;
			max-width: 400px;
		}
		.slider-wrapper {
			height: 420px;
		}
	}
	@media (max-width: 540px) {
		.articles {
			max-width: 360px;
		}
		.articles-title {
			font-size: 36px;
			max-width: 290px;
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
	}
</style>
