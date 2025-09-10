<script lang="ts">
	import History from '$lib/components/home/History/History.svelte';
	import Subscription from '$lib/components/home/Subscription/Subscription.svelte';
	import { AboutMushroomsDataOption } from '$lib/helpers/helpers-data-options';

	
</script>

<!-- Hero like section -->
<History
	showButton={false}
	title="Picmi story starts here"
	description="We're driven by a singular vision: to unlock the full potential of the human mind and empower individuals to reach new heights of mental clarity, focus, and awareness. Learn how we're redefining what it means to enhance cognitive function naturally."
/>

<!-- Intro split -->
<section class="about-intro container">
	<div class="intro-grid">
		<div class="intro-left card">
			<h3>
				<span>Your mind is the masterpiece.</span>
				<br />
				<span class="purple">We just help bring the colors out.</span>
			</h3>
			<div class="product-box">
				<img src="/assets/illustrations/PICMI-WhiteChoco-Fresas.png" alt="picmi box" />
				<div class="ribbon ribbon-top">Creativity boost</div>
				<div class="ribbon ribbon-bottom">Moments of clarity</div>
			</div>
		</div>
		<div class="intro-right card">
			<div class="icons">
				<img src="/assets/icons/web.png" alt="icon web" />
				<img src="/assets/icons/smile.png" alt="icon smile" />
			</div>
			<p>
				Inspired by the natural power of mushrooms, we craft product designed to help you slow down,
				tune in, and unlock your creative flow.
			</p>
			<p>
				Each bite is a reminder that clarity, calm, and imagination can be part of your everyday
				ritual. Picmi is here to help you recharge, reset, and rediscover the joy of creating —
				whether that’s at your desk, in the studio, or out in the world.
			</p>
		</div>
		<div class="intro-bg card" aria-hidden="true"></div>
	</div>
	<div class="icons-mobile">
		<img src="/assets/icons/web.png" alt="icon web" />
		<img src="/assets/icons/smile.png" alt="icon smile" />
	</div>
	<p class="intro-text-mobile">
		Inspired by the natural power of mushrooms, we craft product designed to help you slow down,
		tune in, and unlock your creative flow.
	</p>
	<p class="intro-text-mobile">
		Each bite is a reminder that clarity, calm, and imagination can be part of your everyday ritual.
		Picmi is here to help you recharge, reset, and rediscover the joy of creating — whether that’s
		at your desk, in the studio, or out in the world.
	</p>
	<div class="badges">
		<button class="badge">Moments of clarity</button>
		<button class="badge">Creativity boost</button>
	</div>
	<div class="intro-wave"></div>
	<div class="intro-wave-2"></div>
	<div class="intro-wave-3"></div>
	<div class="intro-wave-4"></div>
</section>

<!-- Mushrooms -->
<section class="about-mushrooms container">
	<h3 class="mushrooms-title">
		<span>Science-backed</span>
		<br />
		<span>functional mushrooms</span>
	</h3>
	<div class="mushrooms-grid">
		{#each AboutMushroomsDataOption as m}
			<article class="mushroom-card">
				<img class="mushroom-img" src={m.img} alt={m.title} />
				<h4>{m.title}</h4>
				<p>{m.text}</p>
			</article>
		{/each}
	</div>
</section>

<div class="about-subscription container">
	<Subscription />
	<div class="footer-wave"></div>
</div>

<style>
	.container {
		width: min(1600px, 92%);
		margin: 0 auto;
	}

	/* Intro */
	.about-intro {
		margin-top: 40px;
		position: relative;
	}
	.intro-grid {
		display: grid;
		grid-template-columns: 1.3fr 1fr 1fr;
		gap: 28px;
	}
	.card {
		background: #ffffff;
		border-radius: 24px;
		border: 1px solid rgba(0, 0, 0, 0.06);
		box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
		position: relative;
	}
	.intro-left {
		padding: 28px;
	}
	.intro-left h3 {
		font-family: var(--font-sans);
		font-size: 36px;
		font-weight: 800;
		line-height: 1.05;
		margin: 0 0 18px 0;
	}
	.intro-left h3 .purple {
		color: #7f73f0;
	}
	.product-box {
		position: relative;
		background: #f3f1ff;
		border-radius: 24px;
		padding: 24px;
		transform: rotate(-2deg);
	}
	.product-box img {
		max-width: 440px;
		margin: 0 auto;
		display: block;
	}
	.ribbon {
		position: absolute;
		right: 14px;
		background: #7f73f0;
		color: #fff;
		border-radius: 14px;
		padding: 8px 14px;
		font-weight: 700;
		box-shadow: 0 10px 30px rgba(127, 115, 240, 0.35);
	}
	.ribbon-top {
		top: 24px;
	}
	.ribbon-bottom {
		bottom: 24px;
		background: #5e55c9;
	}
	.intro-right {
		padding: 24px;
	}
	.intro-right .icons {
		display: flex;
		gap: 10px;
		margin-bottom: 12px;
	}
	.intro-right p {
		color: #4b4b4b;
		font-size: 16px;
		line-height: 1.6;
	}
	.intro-bg {
		background: url('/assets/backgrounds/violet_waves.png') center/cover no-repeat;
	}

	/* Mobile intro extras */
	.icons-mobile,
	.intro-text-mobile,
	.badges,
	.intro-wave,
	.intro-wave-2,
	.intro-wave-3,
	.intro-wave-4 {
		display: none;
	}

	/* Mushrooms */
	.about-mushrooms {
		padding: 80px 0 40px;
	}
	.mushrooms-title {
		font-family: var(--font-decorative);
		font-size: 56px;
		line-height: 0.95;
		text-align: center;
		margin: 0 0 28px 0;
	}
	.mushrooms-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 28px;
	}
	.mushroom-card h4 {
		margin: 12px 0 6px;
	}
	.mushroom-card p {
		color: #4b4b4b;
		line-height: 1.6;
		font-size: 14px;
	}
	.mushroom-img {
		width: 100%;
		height: 180px;
		object-fit: cover;
		border-radius: 14px;
		background: #e9e9e9;
	}

	.about-subscription {
		margin: 60px auto 40px;
	}

	@media (max-width: 1200px) {
		.intro-grid {
			grid-template-columns: 1fr 1fr;
		}
		.intro-bg {
			display: none;
		}
		.mushrooms-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (max-width: 768px) {
		.intro-grid {
			display: block;
		}
		.intro-left,
		.intro-right {
			border: none;
			background: transparent;
			padding: 0;
			box-shadow: none;
		}
		.intro-left h3 {
			font-size: 24px;
		}
		.product-box img {
			max-width: 260px;
		}
		.intro-right {
			display: none;
		}
		.icons-mobile {
			display: flex;
			gap: 10px;
			margin: 16px 4px;
		}
		.intro-text-mobile {
			display: block;
			color: #6a6a6a;
			font-size: 14px;
			line-height: 1.6;
		}
		.badges {
			display: flex;
			gap: 10px;
			margin: 14px 0 6px;
		}
		.badge {
			background: #7f73f0;
			color: #fff;
			border: none;
			border-radius: 999px;
			padding: 6px 12px;
			font-weight: 700;
			font-size: 12px;
		}
		.mushrooms-title {
			font-size: 36px;
			text-align: left;
		}
		.mushrooms-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
