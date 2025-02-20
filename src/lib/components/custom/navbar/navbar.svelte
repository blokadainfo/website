<script lang="ts">
	import LogoColored from '$lib/assets/logo/color/logo-full.svg';
	import LogoWhite from '$lib/assets/logo/white/logo-full.svg';
	import { fade } from 'svelte/transition';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let screenHeight: number = $state(0);
	let y: number = $state(0);

	onMount(() => {
		if (browser) {
			screenHeight = window.innerHeight;
		}

		const preloadImage = (src: string) => {
			const img = new Image();
			img.src = src;
		};

		preloadImage(LogoColored);
		preloadImage(LogoWhite);
	});
</script>

<div class="sticky top-0 z-10 flex items-center">
	<div class="flex flex-1 gap-2 lg:flex-none">
		<a href="/" class="m-2 grid sm:m-4">
			{#if y > screenHeight || page.route.id !== '/'}
				<img
					src={LogoColored}
					alt="Blokada INFO Logo"
					class="col-start-1 row-start-1 h-24"
					transition:fade={{ duration: 250 }}
				/>
			{:else}
				<img
					src={LogoWhite}
					alt="Blokada INFO Logo"
					class="col-start-1 row-start-1 h-24"
					transition:fade={{ duration: 250 }}
				/>
			{/if}
		</a>
	</div>
</div>

<svelte:window bind:scrollY={y} />
