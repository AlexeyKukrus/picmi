<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { browser } from '$app/environment';
	import { fade, scale } from 'svelte/transition';

	const dispatch = createEventDispatcher<{ confirm: void; deny: void }>();

	function handleConfirm() {
		if (browser) sessionStorage.setItem('isConfirmedUser', 'true');
		dispatch('confirm');
	}

	function handleDeny() {
		dispatch('deny');
		if (typeof window !== 'undefined') {
			try {
				window.open('', '_self');
				window.close();
			} catch {}
		}
	}
</script>

<div
	class="overlay"
	role="dialog"
	aria-modal="true"
	in:fade={{ duration: 1000 }}
	out:fade={{ duration: 1000 }}
>
	<div
		class="modal"
		in:scale={{ duration: 1000, start: 0.96 }}
		out:scale={{ duration: 1000, start: 0.96 }}
	>
		<img src="/assets/icons/logo.png" class="brand" alt="picmi" />
		<h1 class="title broukha-normal-64">We're going to need to see some ID</h1>
		<div class="actions">
			<button class="btn btn-primary inter-semibold-20" on:click={handleConfirm}>I’M OVER 21</button
			>
			<button class="btn btn-secondary inter-semibold-20" on:click={handleDeny}
				>NOT QUITE YET</button
			>
		</div>
	</div>
</div>

<style>
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(8, 14, 40, 0.8);
		display: grid;
		place-items: center;
		z-index: 9999;
	}
	.modal {
		width: 60vw;
		height: 60vh;
		max-width: 1000px;
		max-height: 720px;
		min-width: 320px;
		min-height: 320px;
		border-radius: 24px;
		padding: 40px 28px;
		text-align: center;
		background-image: url('/assets/backgrounds/violet_waves.png');
		background-size: cover;
		border: 1px solid rgba(107, 70, 255, 0.25);
		backdrop-filter: blur(1.2px) contrast(101%);
		-webkit-backdrop-filter: blur(1.2px) contrast(101%);
		box-shadow: var(--shadow-soft);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 32px;
	}
	@media (max-width: 768px) {
		.modal {
			width: 92vw;
			height: auto;
			padding: 28px 22px;
			gap: 24px;
		}
		.title {
			font-size: 36px;
		}
	}
	.brand {
		height: 28px;
	}
	.title {
		margin: 0;
		line-height: 1;
		color: #7262e5;
	}
	.actions {
		display: flex;
		gap: 16px;
		flex-wrap: wrap;
		justify-content: center;
	}
	.btn {
		appearance: none;
		border: 0;
		border-radius: 999px;
		padding: 16px 40px;
		cursor: pointer;
	}
	.btn-primary {
		background: #8273ef;
		color: #fff;
	}
	.btn-primary:hover {
		background: #6b5bd6;
	}
	.btn-secondary {
		background: rgba(255, 255, 255, 0.5);
		color: #8273ef;
	}
	.btn-secondary:hover {
		background: #f4f1ff;
	}
</style>
