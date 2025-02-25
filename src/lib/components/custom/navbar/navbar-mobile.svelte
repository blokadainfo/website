<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';
	import Logo from '../logo/logo.svelte';

	let { y, screenHeight } = $props();
	let showMenu = $state(false);

	function getMenuIconColor(color: string): string {
		if (showMenu === true) {
			return '#db2340';
		}

		return color === 'auto'
			? y < screenHeight - 48 && page.route.id === '/'
				? '#fff'
				: '#db2340'
			: color;
	}

	function getLogoIconColor(color: string): string {
		if (showMenu === true) {
			return color;
		}

		return y >= screenHeight - 48 || page.route.id !== '/' ? color : '#fff';
	}

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

{#snippet logo(primary?: string, secondary?: string)}
	<a href="/" class="ml-2 h-24">
		<Logo
			class="h-24 {page.route.id === '/' ? 'animate-fadeIn' : ''}"
			mini={true}
			{primary}
			{secondary}
		/>
	</a>
{/snippet}

{#snippet menuButton(color: string)}
	<button
		type="button"
		class="h-24 pr-2 cursor-pointer {page.route.id === '/' ? 'animate-fadeIn' : ''}"
		onclick={toggleMenu}
		aria-label="Otvori Meni"
	>
		<svg
			transition:fade={{ duration: 375 }}
			xmlns="http://www.w3.org/2000/svg"
			width="62"
			height="77"
			viewBox="0 0 512 512"
		>
			<path
				class="transition-colors duration-500"
				fill="none"
				stroke={getMenuIconColor(color)}
				stroke-linecap="round"
				stroke-miterlimit="10"
				stroke-width="64"
				d="M88 152h336M88 256h336M88 360h336"
			/>
		</svg>
	</button>
{/snippet}

{#if showMenu}
	<div class="fixed inset-0 z-30 h-lvh bg-white">
		<div class="flex h-full w-full flex-col items-center justify-center gap-4">
			<a href="/" onclick={() => toggleMenu()}>POČETNA</a>
			<a href="/o-nama" onclick={() => toggleMenu()}>O NAMA</a>
			<a href="/arhiv-prenosa" onclick={() => toggleMenu()}>ARHIV PRENOSA</a>
			<a href="/vaznost-sednice-strucnog-veca" onclick={() => toggleMenu()}>VAŽNOST SEDNICE</a>
			<!--<a
				href="/arhiv-protesta" onclick={() => toggleMenu()}>ARHIV PROTESTA</a
			>-->
		</div>
	</div>
{/if}

<div
	class="flex h-20 w-full justify-between {page.route.id === '/' || showMenu === true
		? 'fixed top-0 z-50'
		: ''}"
>
	{@render logo(getLogoIconColor('#db2340'), getLogoIconColor('#50c2be'))}
	{@render menuButton('auto')}
</div>
