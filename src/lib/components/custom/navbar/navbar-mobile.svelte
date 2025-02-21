<script lang="ts">
	import { page } from '$app/state';
	import { fade } from 'svelte/transition';

	let { y, screenWidth, screenHeight } = $props();
	let showMenu = $state(false);

	function getColor(color: string): string {
		if (showMenu === true) {
			return '#000';
		}

		return color === 'auto'
			? y < screenHeight - 48 && page.route.id === '/'
				? '#fff'
				: '#db2340'
			: color;
	}

	function toggleMenu() {
		showMenu = !showMenu;
	}
</script>

{#snippet menuButton(color: string)}
	<button
		type="button"
		class="fixed -right-1 top-0 z-50 mt-3 block h-24 cursor-pointer sm:hidden {page.route.id === '/'
			? 'animate-fadeIn'
			: ''}"
		onclick={toggleMenu}
		aria-label="Otvori Meni"
	>
		<svg
			transition:fade={{ duration: 375 }}
			xmlns="http://www.w3.org/2000/svg"
			width="80%"
			height="80%"
			viewBox="0 0 512 512"
		>
			<path
				class="transition-colors duration-500"
				fill="none"
				stroke={getColor(color)}
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
			<!--<a
				href="/arhiv-protesta" onclick={() => toggleMenu()}>ARHIV PROTESTA</a
			>-->
		</div>
	</div>
{/if}

{@render menuButton('auto')}
