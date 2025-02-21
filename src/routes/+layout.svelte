<script>
	import '../app.css';

	import Navbar from '$lib/components/custom/navbar/navbar.svelte';
	import { page } from '$app/state';

	let { children } = $props();
</script>

<!-- Za stream provera (Može se izbrisati u budućnosti) -->
{#if page.route.id !== '/countdown'}
	<Navbar />
{/if}

{@render children()}
