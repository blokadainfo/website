<script>
	import '../app.css';

	import Navbar from '$lib/components/custom/navbar/navbar.svelte';
	import { page } from '$app/state';
</script>

<!-- Za stream provera (Može se izbrisati u budućnosti) -->
{#if page.route.id !== '/countdown'}
	<Navbar />
{/if}

<slot />
