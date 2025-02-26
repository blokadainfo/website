<script lang="ts">
	import { page } from '$app/state';
	import Logo from '../logo/logo.svelte';

	let {
		items,
		y,
		screenHeight
	}: {
		items: {
			href: string;
			text: string;
		}[];
		y: number;
		screenHeight: number;
	} = $props();
</script>

{#snippet logo(primary: string, secondary: string)}
	<Logo class="col-start-1 row-start-1 h-24" {primary} {secondary} />
{/snippet}

<div class="fixed top-0 z-30">
	<a href="/" class="m-2 grid animate-fadeIn sm:m-4">
		{#if y >= screenHeight - 48 || page.route.id !== '/'}
			{@render logo('#db2340', '#50c2be')}
		{:else}
			{@render logo('#fff', '#fff')}
		{/if}
	</a>
</div>

<div
	class="fixed top-0 z-10 flex h-svh flex-col justify-center {page.route.id === '/'
		? 'animate-fadeIn'
		: ''}"
>
	<div class="m-6 flex flex-col gap-2 text-xl font-bold">
		{#each items as { href, text } (href)}
			<a
				{href}
				class="{page.route.id === '/' && y < screenHeight / 2 + 50 + 60
					? 'text-white hover:text-white/50'
					: 'text-black hover:text-black/50'} transition-colors duration-500">{text}</a
			>
		{/each}
	</div>
</div>
