<footer class="footer">
	<div class="container top">
		<div class="brand">
			<img class="brand-logo" src="/assets/icons/logo_footer.png" alt="picmi" />
		</div>
		<div class="nav-columns">
			<div class="column">
				<h4 class="column-title">MAIN MENU</h4>
				<a href="/">Home</a>
				<a href="/store">Store</a>
				<a href="/wholesale">Wholesale</a>
				<a href="/coa">COA</a>
				<a href="/contact">Contact</a>
			</div>
			<div class="column">
				<h4 class="column-title">POLICIES</h4>
				<a href="/privacy">Privacy Policy</a>
				<a href="/refund">Refund Policy</a>
				<a href="/shipping">Shipping Policy</a>
				<a href="/terms">Terms of service</a>
			</div>
		</div>
	</div>

	<div class="container disclaimer">
		<h5>DISCLAIMER</h5>
		<p>
			The information provided on this site is for informational purposes only and is not intended as a substitute for advice from your physician or other health care professional or any information contained on or in any product label or packaging. You should not use the information on this site for diagnosis or treatment of any health problem or for prescription of any medication or other treatment. You should consult with a healthcare professional before starting any diet, exercise or supplementation program, before taking any medication, or if you have or suspect you might have a health problem. You should not stop taking any medication without first consulting your physician. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using this product. This product is not for use by or sale to persons under the age of 18. This product should be used only as directed on the label. These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. Individual weight loss results will vary. Amanita Muscaria is deemed illegal in the state of Louisiana. Products containing Amanita Muscaria must not be shipped to the state of Louisiana. By using this site, you agree to follow the Privacy Policy and all Terms & Conditions printed on this site. Void Where Prohibited by Law.
		</p>
	</div>

	<div class="container bottom">
		<p class="trademark">Picmi Is A Registered Trademark Of DPGC Group © Picmi 2025</p>
		<p class="rights">ALL RIGHTS RESERVED.</p>
	</div>
</footer>

<style>
	.footer {
		background: #111111;
		color: #e7e7e7;
		padding: 40px 0 24px 0;
	}

	.top {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: 80px;
		align-items: start;
		padding-bottom: 32px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
	}

	.brand-logo {
		width: 480px;
		max-width: 100%;
	}

	.nav-columns {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 80px;
	}
	.column-title {
		margin: 0 0 16px 0;
		font-size: 14px;
		letter-spacing: 0.06em;
		color: #bcbcbc;
	}
	.column a {
		display: block;
		color: #ffffff;
		margin: 14px 0;
		font-size: 18px;
	}

	.disclaimer {
		padding: 28px 0 12px 0;
		color: #bdbdbd;
	}
	.disclaimer h5 {
		margin: 0 0 12px 0;
		font-size: 14px;
		letter-spacing: 0.08em;
		color: #9a9a9a;
	}
	.disclaimer p {
		margin: 0;
		font-size: 14px;
		line-height: 1.7;
	}

	.bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 24px;
		padding-top: 18px;
	}
	.trademark {
		margin: 0;
		font-family: var(--font-decorative);
		font-size: 26px;
		color: #e7e7e7;
	}
	.rights {
		margin: 0;
		font-size: 12px;
		color: #bcbcbc;
	}

	/* Mobile 390px */
	@media (max-width: 768px) {
		.top {
			grid-template-columns: 1fr;
			gap: 28px;
			padding-bottom: 24px;
		}
		.brand { text-align: left; }
		.brand-logo { width: 220px; }

		.nav-columns { grid-template-columns: 1fr 1fr; gap: 24px; }
		.column a { font-size: 16px; margin: 10px 0; }

		.disclaimer { padding-top: 20px; }
		.disclaimer p { font-size: 12px; line-height: 1.7; }

		.bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
		.trademark { font-size: 20px; }
		.rights { font-size: 12px; }
	}
</style>