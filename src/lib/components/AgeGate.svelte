<script lang="ts">
	import { goto } from '$app/navigation';

	function handleConfirm() {
		goto('/home');
	}

	function handleDeny() {
		console.log('click Not quite yet');
	}
</script>

<section class="age-gate">
	<div class="card">
		<div>
			<img src="/assets/icons/logo.png" class="brand" alt="picmi" />
		</div>
		<h1 class="title broukha-normal-64">We're going to need to see some ID</h1>
		<div class="actions">
			<button class="btn btn-primary inter-semibold-20" on:click={handleConfirm}>I’M OVER 21</button
			>
			<button class="btn btn-secondary inter-semibold-20" on:click={handleDeny}
				>NOT QUITE YET</button
			>
		</div>
	</div>
	<style>
		.age-gate {
			position: relative;
			display: grid;
			place-items: center;
			min-height: 100dvh;
			padding: 24px;
			background-image: url('/assets/backgrounds/violet_waves.png');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			overflow: hidden;
		}

		.card {
			position: relative;
			display: flex;
			flex-direction: column;
			width: 100%;
			max-width: 760px;
			border-radius: 24px;
			padding: 40px 28px;
			text-align: center;
			align-items: center;
			gap: 64px;
		}

		.brand {
			font-weight: 800;
			font-size: 28px;
			color: #6b5bd6;
			margin-bottom: 16px;
			text-transform: lowercase;
			letter-spacing: 0.5px;
		}

		.title {
			margin: 0;
			line-height: 1;
			color: #7262e5;
		}

		.actions {
			display: flex;
			gap: 24px;
			justify-content: center;
			flex-wrap: wrap;
		}

		.btn {
			appearance: none;
			border: 0;
			border-radius: 999px;
			padding: 16px 40px;
			cursor: pointer;
			transition:
				transform 0.06s ease,
				box-shadow 0.2s ease,
				background 0.2s ease;
		}

		.btn:active {
			transform: translateY(1px);
		}

		.btn-primary {
			background: #8273ef;
			color: #fff;
			box-shadow: 0 6px 16px rgba(119, 101, 243, 0.3);
		}
		.btn-primary:hover {
			background: #6b5bd6;
		}

		.btn-secondary {
			background: rgba(255, 255, 255, 0.5);
			color: #8273ef;
			box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
		}
		.btn-secondary:hover {
			background: #f4f1ff;
		}
		@media (max-width: 600px) {
			.card {
				gap: 48px;
			}
			.title {
				font-size: 36px;
			}
			.btn {
				width: 100%;
			}
		}
	</style>
</section>
