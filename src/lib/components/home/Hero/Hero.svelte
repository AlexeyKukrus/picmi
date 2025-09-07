<script lang="ts">
	// Hero
	import { onMount } from 'svelte';

	let heroElement: HTMLElement;

	const handleMouseMove = (event: MouseEvent) => {
		if (!heroElement) return;

		const rect = heroElement.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const moveX = ((x - centerX) / centerX) * 10;
		const moveY = ((y - centerY) / centerY) * 10;

		heroElement.style.setProperty('--mouse-x', `${moveX}px`);
		heroElement.style.setProperty('--mouse-y', `${moveY}px`);
	};

	const handleScroll = () => {
		if (!heroElement) return;

		const scrollY = window.scrollY;
		const rect = heroElement.getBoundingClientRect();
		const elementTop = rect.top + scrollY;
		const elementHeight = rect.height;

		// Паралакс эффект только когда элемент видим
		if (rect.top < window.innerHeight && rect.bottom > 0) {
			const scrollProgress =
				(scrollY - elementTop + window.innerHeight) / (window.innerHeight + elementHeight);
			const parallaxY = scrollProgress * 50; // Скорость паралакса

			heroElement.style.setProperty('--scroll-y', `${parallaxY}px`);
		}
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="hero" aria-label="Hero" bind:this={heroElement} on:mousemove={handleMouseMove}>
	<div class="hero-title">
		<div class="title-line text-left">Let's make</div>
		<div class="title-line text-center">MEMORIES</div>
		<div class="title-line text-right together-desktop">together.</div>
	</div>
	<div class="title-line text-right together-mobile">together.</div>
	<img src="/assets/illustrations/hero-choco.png" alt="choco" class="hero-image" />
	<div class="hero-info">
		<div class="info-icons">
			<img src="/assets/icons/web.png" alt="icon-web" class="info-icon" />
			<img src="/assets/icons/smile.png" alt="icon-smile" class="info-icon" />
		</div>
		<p class="info-text">
			Picmi is a visionary nootropics company that seamlessly blends the indulgence of premium
			chocolates & other confections with the cognitive-enhancing benefits of scientifically backed
			functional mushroom ingredients
		</p>
	</div>
	<button class="hero-button">
		<span>VIEW PRODUCT</span>
	</button>
</section>

<style>
	.hero {
		position: relative;
		width: 100%;
		height: 100vh;
		max-height: 960px;
		background-image: url('/assets/backgrounds/hero.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		overflow: hidden;
		border-radius: 0 0px 32px 32px;
	}
	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/assets/backgrounds/hero.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: translate(var(--mouse-x, 0), var(--mouse-y, 0));
		transition: transform 0.1s ease-out;
		pointer-events: none;
	}

	.hero::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: url('/assets/backgrounds/hero.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		transform: translateY(var(--scroll-y, 0));
		transition: transform 0.05s ease-out;
		pointer-events: none;
		opacity: 0;
	}
	.hero-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 10;
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		max-width: 1566px;
	}
	.title-line {
		color: #fff;
		width: 100%;
	}
	.text-left {
		text-align: left;
		align-self: flex-start;
		font-family: var(--font-sans);
		font-weight: 700;
		font-size: 80px;
	}
	.text-center {
		text-align: center;
		align-self: center;
		line-height: 0.8;
		font-family: var(--font-decorative);
		font-weight: 400;
		font-size: 300px;
	}
	.text-right {
		text-align: right;
		align-self: flex-end;
		font-family: var(--font-sans);
		font-weight: 700;
		font-size: 80px;
	}
	.hero-image {
		background: none;
		position: absolute;
		z-index: 20;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	.hero-info {
		position: absolute;
		z-index: 30;
		max-width: 448px;
		padding: 32px;
		background: rgba(255, 255, 255, 0.14);
		border: 1px solid rgba(107, 70, 255, 0.25);
		border-radius: 24px;
		backdrop-filter: blur(1.2px) contrast(101%);
		-webkit-backdrop-filter: blur(1.2px) contrast(101%);
		box-shadow: var(--shadow-soft);
		transform: rotate(-2deg);
		overflow: hidden;
		bottom: 100px;
		left: 110px;
	}

	.hero-info::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
			142deg,
			rgba(255, 255, 255, 0.4) 0%,
			rgba(255, 255, 255, 0.1) 40%,
			transparent 100%
		);
		pointer-events: none;
	}

	.info-icons {
		display: flex;
		margin-bottom: 24px;
		position: relative;
		z-index: 1;
	}

	.info-icon {
		width: 64px;
		height: 64px;
	}
	.info-text {
		color: #fff;
		font-family: var(--font-sans);
		font-size: 20px;
		font-weight: 300;
		margin: 0;
	}
	.hero-button {
		width: 248px;
		height: 72px;
		background-color: #fff;
		position: absolute;
		z-index: 50;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 20px;
		font-weight: 700;
		color: #8273ef;
		padding: 5px;
		border: none;
		border-radius: 40px;
		cursor: pointer;
	}
	.hero-button:hover {
		color: #968af2;
	}
	.hero-button:active {
		color: #6d61c9;
	}
	.hero-button span {
		width: 100%;
		border: 2px solid #8273ef;
		padding: 16px 35px;
		border-radius: 40px;
	}
	.hero-button:hover span {
		border: 2px solid #968af2;
	}
	.hero-button:active span {
		border: 2px solid #6d61c9;
	}

	@media (max-width: 1700px) {
		.hero {
			max-height: 760px;
		}
		.hero-title {
			max-width: 1045px;
		}
		.text-left {
			font-size: 60px;
		}
		.text-center {
			font-size: 200px;
		}
		.text-right {
			font-size: 60px;
		}
		.hero-image {
			max-width: 400px;
		}
		.hero-info {
			max-width: 370px;
			padding: 30px;
			bottom: 43px;
			left: 203px;
		}
		.info-icons {
			margin-bottom: 20px;
		}
		.info-icon {
			width: 54px;
			height: 54px;
		}
		.info-text {
			font-size: 16px;
		}
	}
	@media (max-width: 1600px) {
		.hero-info {
			max-width: 370px;
			padding: 20px;
			bottom: 100px;
			left: 140px;
		}
	}
	@media (max-width: 1400px) {
		.hero-info {
			left: 25px;
		}
	}
	@media (max-width: 1145px) {
		.hero {
			max-height: 500px;
		}
		.hero-title {
			max-width: 730px;
		}
		.text-left {
			font-size: 40px;
		}
		.text-center {
			font-size: 140px;
		}
		.text-right {
			font-size: 40px;
		}
		.hero-image {
			max-width: 260px;
		}
		.hero-info {
			max-width: 278px;
			padding: 20px;
			bottom: 10px;
			left: 85px;
		}
		.info-icons {
			display: flex;
			margin-bottom: 16px;
			position: relative;
			z-index: 1;
		}

		.info-icon {
			width: 40px;
			height: 40px;
		}
		.info-text {
			font-size: 14px;
		}
		.hero-button {
			width: 178px;
			height: 56px;

			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 16px;
			font-weight: 700;
			color: #8273ef;
			padding: 5px;
			border: none;
			border-radius: 40px;
		}
		.hero-button span {
			width: 100%;
			border: 2px solid #8273ef;
			padding: 12px 18px;
			border-radius: 40px;
		}
	}
	@media (max-width: 1000px) {
		.hero {
			max-height: 663px;
		}
		.hero::before {
			transition: transform 0.05s ease-out;
		}
		.hero::after {
			opacity: 1;
		}
		.hero-title {
			max-width: 358px;
			top: 115px;
			transform: translateX(-50%);
		}
		.text-left {
			font-size: 24px;
		}
		.text-center {
			font-size: 68px;
			line-height: 0.9;
		}
		.text-right {
			font-size: 24px;
		}
		.together-desktop {
			display: none;
		}
		.together-mobile {
			display: block;
			position: absolute;
			top: 216px;
			left: 50%;
			transform: translate(-50%, -50%);
			z-index: 30;
			font-size: 24px;
			color: #fff;
			font-family: var(--font-sans);
			font-weight: 700;
			text-align: right;
			width: 100%;
			max-width: 358px;
		}
		.hero-image {
			max-width: 236px;
			bottom: 280px;
		}
		.hero-info {
			max-width: 285px;
			padding: 20px;
			position: absolute;
			bottom: 90px;
			left: 45%;
			transform: translateX(-50%) rotate(-2deg);
		}

		.info-icons {
			margin-bottom: 16px;
		}

		.info-icon {
			width: 40px;
			height: 40px;
		}
		.info-text {
			color: #fff;
			font-family: var(--font-sans);
			font-size: 14px;
			font-weight: 100;
			margin: 0;
		}
	}
	@media (max-width: 450px) {
		.hero-info {
			max-width: 285px;
			padding: 20px;
			position: absolute;
			bottom: 70px;
			left: 36%;
			transform: translateX(-39%) rotate(-2deg);
		}
		.hero-button {
			width: 178px;
			height: 56px;

			bottom: 20px;
			left: 50%;
			transform: translateX(-50%);
			font-size: 16px;
			font-weight: 700;
			color: #8273ef;
			padding: 5px;
			border: none;
			border-radius: 40px;
		}
		.hero-button span {
			width: 100%;
			border: 2px solid #8273ef;
			padding: 12px 18px;
			border-radius: 40px;
		}
	}
</style>
