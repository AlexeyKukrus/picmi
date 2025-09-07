<script lang="ts">
	import Articles from '$lib/components/home/Articles/Articles.svelte';
	import Hero from '$lib/components/home/Hero/Hero.svelte';
	import History from '$lib/components/home/History/History.svelte';
	import Shop from '$lib/components/home/Shop/Shop.svelte';
	import Subscription from '$lib/components/home/Subscription/Subscription.svelte';
</script>

<Hero />
<Shop />
<History />
<Articles />
<div class="page-container">
	<Subscription />
</div>

<style>
	.page-container { max-width: 1600px; margin: 40px auto 120px auto; }
	@media (max-width: 1700px) { .page-container { max-width: 1380px; margin: 40px auto; } }
	@media (max-width: 1400px) { .page-container { max-width: 970px; } }
	@media (max-width: 991px) { .page-container { max-width: 750px; } }
	@media (max-width: 768px) { .page-container { max-width: 520px; margin: 30px auto; } }
	@media (max-width: 540px) { .page-container { max-width: 360px; } }
</style>
