<script lang="ts">
	import Logo from '$lib/components/custom/logo/logo.svelte';
	import { page } from '$app/state';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let { initLogoConfig = { primary: '#db2340', secondary: '#50c2be' } } = $props();

	let screenWidth: number = $state(420420);
	let screenHeight: number = $state(420420);
	let y: number = $state(0);

	onMount(() => {
		if (browser) {
			screenWidth = window.innerWidth;
			screenHeight = window.innerHeight;
		}
	});
</script>

{#snippet logo(primary: string, secondary: string)}
	<Logo class="col-start-1 row-start-1 h-24" mini={screenWidth < 40 * 16} {primary} {secondary} />
{/snippet}

<div class="fixed top-0 z-10 flex w-full items-center">
	<div class="flex flex-1 gap-2 lg:flex-none">
		<a href="/" class="m-2 grid sm:m-4">
			{#if page.route.id === '/'}
				{#if y >= screenHeight - 48 || page.route.id !== '/'}
					{@render logo('#db2340', '#50c2be')}
				{:else}
					{@render logo('#fff', '#fff')}
				{/if}
			{:else}
				{@render logo(initLogoConfig.primary, initLogoConfig.secondary)}
			{/if}
		</a>
	</div>
</div>

<svelte:window bind:scrollY={y} />
