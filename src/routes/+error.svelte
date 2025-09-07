<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="error-page">
	<div class="hero-title">
		<div class="title-line text-left">Page</div>
		<div class="title-line text-center">404</div>
		<div class="title-line text-right">not found</div>
	</div>
</div>

<style>
	.error-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: url('/assets/backgrounds/hero.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		font-family: Arial, sans-serif;
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
		max-width: 600px;
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

	@media (max-width: 768px) {
		.hero-title {
			max-width: 400px;
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
	}
	@media (max-width: 500px) {
		.hero-title {
			max-width: 256px;
		}
		.text-left {
			font-size: 30px;
		}
		.text-center {
			font-size: 130px;
		}
		.text-right {
			font-size: 30px;
		}
	}
</style>
