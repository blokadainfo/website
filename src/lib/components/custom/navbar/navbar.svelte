<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import NavbarDesktop from './navbar-desktop.svelte';
	import NavbarMobile from './navbar-mobile.svelte';

	const items = [
		{
			href: '/o-nama',
			text: 'O NAMA'
		},
		{
			href: '/donacije',
			text: 'DONACIJE'
		},
		{
			href: '/arhiv-prenosa',
			text: 'ARHIV PRENOSA'
		},
		{
			href: '/vaznost-sednice-strucnog-veca',
			text: 'VAŽNOST SEDNICE'
		}
	];

	let y = $state(0);
	let screenHeight: number = $state(420420);

	onMount(() => {
		if (browser) {
			screenHeight = window.innerHeight;
		}
	});
</script>

<div class="hidden xl:block">
	<NavbarDesktop {items} {y} {screenHeight} />
</div>
<div class="block xl:hidden">
	<NavbarMobile {items} {y} {screenHeight} />
</div>

<svelte:window bind:scrollY={y} />
