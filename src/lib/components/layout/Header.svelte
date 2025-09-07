<script lang="ts">
	let isMenuOpen = false;
	const toggleMenu = () => (isMenuOpen = !isMenuOpen);

	let wrapEl: HTMLDivElement | null = null;
</script>

<header class="site-header fixed">
	<div class="header-wrap" bind:this={wrapEl}>
		<nav class="nav">
			<button class="icon-btn menu" aria-label="Open menu" on:click={toggleMenu}>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 6h18M3 12h18M3 18h18" stroke="#6b46ff" stroke-width="2" stroke-linecap="round" />
				</svg>
			</button>

			<div class="nav-left">
				<a href="/store">STORE</a>
				<a href="/about">ABOUT</a>
				<a href="/contact">CONTACT</a>
			</div>

			<a href="/" class="nav-logo" aria-label="picmi home">
				<img src="/assets/icons/logo.png" alt="picmi" />
			</a>

			<div class="nav-right">
				<button class="icon-btn cart" aria-label="Cart">
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8 7a4 4 0 118 0" stroke="#6b46ff" stroke-width="1.8" stroke-linecap="round" />
						<rect x="5" y="7" width="14" height="12" rx="3" stroke="#6b46ff" stroke-width="1.8" />
					</svg>
				</button>
			</div>
		</nav>
	</div>

	<!-- Mobile dropdown -->
	<div class="mobile-menu" role="dialog" aria-modal="true" data-open={isMenuOpen} on:click={() => (isMenuOpen = false)} on:keydown={(e) => e.key === 'Escape' && (isMenuOpen = false)} tabindex="-1">
		<div class="sheet" role="menu" tabindex="0" on:click|stopPropagation on:keydown={(e) => e.key === 'Escape' && (isMenuOpen = false)}>
			<a href="/store" on:click={() => (isMenuOpen = false)}>STORE</a>
			<a href="/about" on:click={() => (isMenuOpen = false)}>ABOUT</a>
			<a href="/contact" on:click={() => (isMenuOpen = false)}>CONTACT</a>
		</div>
	</div>
</header>

<style>
	.site-header { position: sticky; top: 12px; z-index: 1000; }
	.site-header.fixed { position: fixed; top: 12px; left: 0; right: 0; }

	.header-wrap {
		z-index: 1100;
		width: min(1240px, 94%);
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
		content: "";
		position: absolute;
		left: 16px; right: 16px; bottom: -10px; height: 18px;
		border-radius: 9999px;
		background: linear-gradient(to bottom, rgba(0,0,0,0.04), rgba(0,0,0,0));
		filter: blur(6px);
		z-index: -1;
	}

	.nav { display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 12px 18px; }
	.nav-left { display: flex; gap: 28px; justify-self: start; }
	.nav-left a { font-weight: 600; color: #6b61d8; letter-spacing: 0.02em; }
	.nav-logo { justify-self: center; display: inline-flex; align-items: center; }
	.nav-logo img { height: 26px; display: block; }
	.nav-right { justify-self: end; display: flex; align-items: center; }
	.icon-btn { width: 42px; height: 42px; border-radius: 9999px; border: 2px solid rgba(107,70,255,0.6); background: rgba(255,255,255,0.35); backdrop-filter: blur(1px); -webkit-backdrop-filter: blur(1px); display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
	.menu { display: none; }

	@media (max-width: 768px) {
		.nav { grid-template-columns: auto 1fr auto; }
		.menu { display: inline-flex; }
		.nav-left { display: none; }
		.nav-logo img { height: 22px; }
	}

	.mobile-menu { position: fixed; inset: 0; background: rgba(17,17,17,0.25); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px); opacity: 0; pointer-events: none; transition: opacity .2s ease; }
	.mobile-menu[data-open="true"] { opacity: 1; pointer-events: auto; }
	.sheet { position: absolute; top: 68px; left: 50%; transform: translateX(-50%); width: min(520px, 92%); border-radius: 18px; background: rgba(255,255,255,0.75); border: 1px solid rgba(107,70,255,0.25); backdrop-filter: blur(14px) saturate(160%); -webkit-backdrop-filter: blur(14px) saturate(160%); box-shadow: var(--shadow-soft); display: flex; flex-direction: column; padding: 14px; gap: 8px; }
	.sheet a { padding: 12px 10px; border-radius: 10px; font-weight: 600; color: #6b61d8; }
</style>


