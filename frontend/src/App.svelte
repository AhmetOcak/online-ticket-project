<script>

	import Router from 'svelte-spa-router';
	import routes from './router/routes.js';
</script>

<Router {routes} />

<main>
	
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>