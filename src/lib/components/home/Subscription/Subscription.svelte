<script>
	// Subscription
</script>

<section class="subscription">
	<div class="subscription-content">
		<h3>Subscribe to our newsletter</h3>
		<form class="subscription-form">
			<input type="email" placeholder="Your e-mail" required />
			<button type="submit">SIGN IN</button>
		</form>
	</div>
</section>

<style>
	.subscription {
		max-width: 1600px;
		margin: 0 auto;
		background-image: url('/assets/backgrounds/subscriptions.png');
		background-size: cover;
		padding: 60px 100px;
		border-radius: 40px;
	}
	.subscription-content {
		display: flex;
		justify-content: space-between;
		align-items: end;
	}
	.subscription h3 {
		font-family: var(--font-decorative);
		font-size: 48px;
		color: #000000;
		max-width: 400px;
		margin: 0;
	}
	.subscription-form {
		display: flex;
		gap: 15px;
	}
	.subscription-form input {
		padding: 16px 20px;
		border: 1px solid #ddd;
		border-radius: 12px;
		font-size: 16px;
		min-width: 520px;
	}
	.subscription-form button {
		background: #8273ef;
		color: white;
		border: none;
		border-radius: 25px;
		padding: 16px 40px;
		font-size: 20px;
		font-weight: 400;
		cursor: pointer;
	}

	@media (max-width: 1400px) {
		.subscription h3 {
			font-size: 38px;
		}
		.subscription-form input {
			min-width: 365px;
		}
		.subscription-form button {
			font-size: 16px;
		}
	}
	@media (max-width: 1200px) {
		.subscription {
			padding: 44px 43px;
		}
		.subscription h3 {
			font-size: 28px;
		}
		.subscription-form input {
			min-width: 275px;
		}
		.subscription-form button {
			font-size: 16px;
		}
		.subscription-form input {
			padding: 7px 20px;
		}
		.subscription-form button {
			font-size: 14px;
		}
	}
	@media (max-width: 991px) {
		.subscription {
			padding: 30px 20px;
		}
		.subscription-content {
			flex-direction: column;
			align-items: start;
			gap: 10px;
		}
		.subscription-form {
			flex-direction: column;
			gap: 15px;
			width: 100%;
		}
		.subscription-form input {
			padding: 16px 20px;
		}
		.subscription-form button {
			padding: 16px 40px;
			font-size: 16px;
			width: fit-content;
		}
	}
</style>
