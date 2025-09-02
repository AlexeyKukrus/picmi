<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>404 - Страница не найдена</title>
</svelte:head>

<div class="error-page">
	<div class="error-content">
		<h1 class="error-title">404</h1>
		<h2 class="error-subtitle">НЕ НАЙДЕНО!!!</h2>
		<p class="error-description">Страница, которую вы ищете, не существует.</p>
		<a href="/" class="home-link">Вернуться на главную</a>
	</div>
</div>

<style>
	.error-page {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
		font-family: Arial, sans-serif;
	}

	.error-content {
		text-align: center;
		padding: 40px;
		background: white;
		border-radius: 20px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
		max-width: 500px;
	}

	.error-title {
		font-size: 120px;
		font-weight: 900;
		color: #8273ef;
		margin: 0;
		line-height: 1;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
	}

	.error-subtitle {
		font-size: 36px;
		font-weight: 700;
		color: #333;
		margin: 20px 0;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.error-description {
		font-size: 18px;
		color: #666;
		margin: 20px 0 30px 0;
		line-height: 1.6;
	}

	.home-link {
		display: inline-block;
		background: #8273ef;
		color: white;
		text-decoration: none;
		padding: 15px 30px;
		border-radius: 25px;
		font-weight: 600;
		font-size: 16px;
		transition: all 0.3s ease;
	}

	.home-link:hover {
		background: #6b5bd6;
		transform: translateY(-2px);
		box-shadow: 0 10px 20px rgba(130, 115, 239, 0.3);
	}

	@media (max-width: 768px) {
		.error-content {
			padding: 30px 20px;
			margin: 20px;
		}

		.error-title {
			font-size: 80px;
		}

		.error-subtitle {
			font-size: 24px;
		}

		.error-description {
			font-size: 16px;
		}
	}
</style>
