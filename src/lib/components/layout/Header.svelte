<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	let isMenuOpen = $state(false);
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	let isDesktop = $state(false);
	let wrapEl: HTMLDivElement | null = null;

	$effect(() => {
		if (typeof document === 'undefined') return;
		document.documentElement.style.overflow = isMenuOpen ? 'hidden' : '';
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
	});

	onMount(() => {
		const set = () => (isDesktop = window.innerWidth > 768);
		set();
		window.addEventListener('resize', set);
		return () => window.removeEventListener('resize', set);
	});
</script>

<header class="site-header fixed" class:desktop-dark={isDesktop && $page.url.pathname !== '/'}>
	<div class="header-wrap" bind:this={wrapEl}>
		<nav class="nav">
			<button
				class="icon-btn menu"
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				onclick={toggleMenu}
			>
				{#if isMenuOpen}
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 6l12 12M18 6L6 18"
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				{:else}
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M3 6h18M3 12h18M3 18h18"
							stroke="#ffffff"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				{/if}
			</button>

			<div class="nav-left">
				<a
					href="/store"
					class={isDesktop && $page.url.pathname !== '/' && $page.status !== 404 ? 'dark-link' : ''}
					>STORE</a
				>
				<a
					href="/about"
					class={isDesktop && $page.url.pathname !== '/' && $page.status !== 404 ? 'dark-link' : ''}
					>ABOUT</a
				>
				<a
					href="/contact"
					class={isDesktop && $page.url.pathname !== '/' && $page.status !== 404 ? 'dark-link' : ''}
					>CONTACT</a
				>
			</div>

			<a href="/" class="nav-logo" aria-label="picmi home">
				<img
					src={$page.url.pathname !== '/' && $page.status !== 404 && !isMenuOpen
						? '/assets/icons/logo-black.png'
						: '/assets/icons/logo.png'}
					alt="picmi"
				/>
			</a>

			<div class="nav-right hidden">
				<button class="icon-btn cart" aria-label="Cart">
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8 7a4 4 0 118 0" stroke="#6b46ff" stroke-width="1.8" stroke-linecap="round" />
						<rect x="5" y="7" width="14" height="12" rx="3" stroke="#6b46ff" stroke-width="1.8" />
					</svg>
				</button>
			</div>
		</nav>
	</div>

	<!-- Mobile full-screen menu -->
	<div
		class="mm-overlay"
		data-open={isMenuOpen}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
		onclick={() => (isMenuOpen = false)}
		onkeydown={(e) => e.key === 'Escape' && (isMenuOpen = false)}
	>
		<div class="mm-panel" role="document" onclick={(e) => e.stopPropagation()}>
			<div class="mm-topbar">
				<button class="icon-btn close" aria-label="Close menu" onclick={() => (isMenuOpen = false)}>
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6 6l12 12M18 6L6 18"
							stroke="#7f73f0"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</button>
				<a href="/" aria-label="picmi" class="mm-logo" onclick={() => (isMenuOpen = false)}>
					<img src="/assets/icons/logo.png" alt="picmi" />
				</a>
				<button class="icon-btn cart hidden" aria-label="Cart">
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M8 7a4 4 0 118 0" stroke="#7f73f0" stroke-width="1.8" stroke-linecap="round" />
						<rect x="5" y="7" width="14" height="12" rx="3" stroke="#7f73f0" stroke-width="1.8" />
					</svg>
				</button>
			</div>

			<nav class="mm-links">
				<a href="/" class="mm-link" onclick={() => (isMenuOpen = false)}>Home</a>
				<a href="/store" class="mm-link" onclick={() => (isMenuOpen = false)}>Store</a>
				<a href="/coa" class="mm-link" onclick={() => (isMenuOpen = false)}>COA</a>
				<a href="/contact" class="mm-link" onclick={() => (isMenuOpen = false)}>Contact</a>
			</nav>

			<div class="mm-policies">
				<div class="mm-policies-title">POLICIES</div>
				<a href="/privacy" onclick={() => (isMenuOpen = false)}>Privacy Policy</a>
				<a href="/refund" onclick={() => (isMenuOpen = false)}>Refund Policy</a>
				<a href="/shipping" onclick={() => (isMenuOpen = false)}>Shipping Policy</a>
				<a href="/terms" onclick={() => (isMenuOpen = false)}>Terms of service</a>
			</div>
		</div>
	</div>
</header>

<style>
	.site-header {
		position: sticky;
		top: 12px;
		z-index: 1000;
	}
	.site-header.fixed {
		position: fixed;
		top: 12px;
		left: 0;
		right: 0;
	}

	.header-wrap {
		z-index: 1100;
		max-width: 1600px;
		margin: 0 auto;
		border-radius: 9999px;
		background: rgba(255, 255, 255, 0.14);
		border: 1px solid rgba(107, 70, 255, 0.25);
		backdrop-filter: blur(1.2px) contrast(101%);
		-webkit-backdrop-filter: blur(1.2px) contrast(101%);
		box-shadow: var(--shadow-soft);
		position: relative;
	}

	.header-wrap::after {
		content: '';
		position: absolute;
		left: 16px;
		right: 16px;
		bottom: -10px;
		height: 18px;
		border-radius: 9999px;
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0));
		filter: blur(6px);
		z-index: -1;
	}

	.nav {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		padding: 12px 40px;
		gap: 12px;
	}
	.nav-left {
		display: flex;
		gap: 28px;
		justify-self: start;
	}
	.nav-left a {
		font-weight: 600;
		color: #ffffff;
		letter-spacing: 0.02em;
	}
	.dark-link {
		color: #111111 !important;
	}
	.nav-logo {
		justify-self: center;
		display: inline-flex;
		align-items: center;
	}
	.nav-logo img {
		height: 44px;
		display: block;
	}
	.nav-right {
		justify-self: end;
		display: flex;
		align-items: center;
	}
	.icon-btn {
		width: 42px;
		height: 42px;
		border-radius: 9999px;
		border: 2px solid #8273ef;
		background: #8273ef;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
	.menu {
		display: none;
	}

	@media (max-width: 768px) {
		.menu {
			display: inline-flex;
		}
		.header-wrap {
			margin: 0 20px;
		}
		.nav {
			padding: 12px 16px;
		}
		.nav-left {
			display: none;
		}
		.nav-logo img {
			height: 28px;
		}
	}

	/* Mobile Menu */
	.mm-overlay {
		position: fixed;
		inset: 0;
		background: #7f73f0;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.25s ease;
		z-index: 1200;
	}
	.mm-overlay[data-open='true'] {
		opacity: 1;
		pointer-events: auto;
	}
	.mm-panel {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}
	.mm-topbar {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 8px;
		padding: 12px 16px;
		margin: 12px 20px;
		border-radius: 99999px;
		background: rgba(255, 255, 255, 0.14);
	}
	.mm-logo img {
		height: 28px;
		display: block;
		margin: 0 auto;
	}
	.icon-btn.close {
		background: #ffffff;
		border-color: #ffffff;
	}
	.icon-btn.cart {
		background: transparent;
		border: 1px solid rgba(255, 255, 255, 0.8);
	}

	.mm-links {
		display: flex;
		flex-direction: column;
		gap: 28px;
		padding: 24px;
		color: #fff;
	}
	.mm-link {
		font-family: var(--font-decorative);
		font-size: 36px;
		color: #fff;
	}

	.mm-policies {
		margin-top: auto;
		padding: 24px;
		display: flex;
		flex-direction: column;
		gap: 16px;
		color: #fff;
		background: #7f73f0;
		border-top: 1px solid rgba(255, 255, 255, 0.25);
	}
	.mm-policies-title {
		font-size: 12px;
		opacity: 0.8;
		letter-spacing: 0.14em;
	}

	.hidden {
		visibility: hidden;
	}
</style>
