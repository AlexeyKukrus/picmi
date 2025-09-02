<script lang="ts">
	// History
	import { onMount } from 'svelte';

	let historyElement: HTMLElement;

	const handleMouseMove = (event: MouseEvent) => {
		if (!historyElement) return;

		const rect = historyElement.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const moveX = ((x - centerX) / centerX) * 10;
		const moveY = ((y - centerY) / centerY) * 10;

		historyElement.style.setProperty('--mouse-x', `${moveX}px`);
		historyElement.style.setProperty('--mouse-y', `${moveY}px`);
	};

	const handleScroll = () => {
		if (!historyElement) return;

		const scrollY = window.scrollY;
		const rect = historyElement.getBoundingClientRect();
		const elementTop = rect.top + scrollY;
		const elementHeight = rect.height;

		// Паралакс эффект только когда элемент видим
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			const scrollProgress =
				(scrollY - elementTop + window.innerHeight) / (window.innerHeight + elementHeight);
			const parallaxY = scrollProgress * 50; // Скорость паралакса

			historyElement.style.setProperty('--scroll-y', `${parallaxY}px`);
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="history" bind:this={historyElement} on:mousemove={handleMouseMove}>
	<h2 class="history-title">Picmi story starts here</h2>
	<div class="history-description">
		<p></p>
	</div>
	<button class="history-button">
		<span>READ THE FULL STORY</span>
	</button>
</section>

<style>
	.history {
		position: relative;
		width: 100%;
		height: 100vh;
		max-height: 960px;
		background-image: url('/assets/backgrounds/history.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
	}

	.history::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/assets/backgrounds/history.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: translate(var(--mouse-x, 0), var(--mouse-y, 0));
		transition: transform 0.1s ease-out;
		pointer-events: none;
	}

	.history::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/assets/backgrounds/history.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: translateY(var(--scroll-y, 0));
		transition: transform 0.05s ease-out;
		pointer-events: none;
		opacity: 0;
	}
	.history-title {
		position: absolute;
		font-family: var(--font-decorative);
		font-size: 80px;
		font-weight: 400;
		color: #ffffff;
		max-width: 475px;
		left: 50%;
		transform: translateX(-50%);
	}
	.history-description {
		width: 482px;
		height: 284px;
		background-image: url('/assets/backgrounds/history_card.png');
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
	}
	.history-button {
		width: 299px;
		height: 64px;
		background-color: #8273ef;
		position: absolute;
		z-index: 10;
		bottom: 50px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 20px;
		font-weight: 500;
		color: #ffffff;
		border-radius: 40px;
	}

	@media (max-width: 1000px) {
		.history {
			max-height: 660px;
		}
		.history::before {
			transition: transform 0.05s ease-out;
		}
		.history::after {
			opacity: 1;
		}
		.history-title {
			font-size: 46px;
			z-index: 10;
			max-width: 280px;
		}
		.history-description {
			background-size: contain;
			width: 330px;
			height: 216px;
			z-index: 10;
		}
	}

	@media (max-width: 550px) {
		.history-title {
			font-size: 46px;
			z-index: 10;
			max-width: 270px;
			width: 100%;
		}
		.history-description {
			width: 330px;
			height: 194px;
		}
		.history-button {
			width: 239px;
			height: 48px;

			bottom: 50px;

			font-size: 16px;
		}
	}
</style>
