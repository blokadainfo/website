<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import NavbarDesktop from './navbar-desktop.svelte';
	import NavbarMobile from './navbar-mobile.svelte';

	let screenHeight: number = $state(420420);
	let y: number = $state(0);

	onMount(() => {
		if (browser) {
			screenHeight = window.innerHeight;
		}
	});
</script>

<div class="hidden xl:block">
	<NavbarDesktop {y} {screenHeight} />
</div>
<div class="block xl:hidden">
	<NavbarMobile {y} {screenHeight} />
</div>
<svelte:window bind:scrollY={y} />
