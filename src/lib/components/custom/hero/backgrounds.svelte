<script lang="ts">
	import { onMount } from 'svelte';

	const imageModules: Record<string, { default: string }> = import.meta.glob(
		'$lib/assets/backgrounds/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	);
	const imageSourcesShuffled = Object.values(imageModules)
		.map((m) => m.default)
		.map((value) => ({ value, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ value }) => value);

	let currentBackgroundIndex = $state(0);
	function changeBackground(): void {
		if (currentBackgroundIndex + 1 < imageSourcesShuffled.length) {
			currentBackgroundIndex++;
		} else {
			currentBackgroundIndex = 0;
		}
	}

	onMount(() => {
		const interval = setInterval(changeBackground, 3000);
		return () => clearInterval(interval);
	});
</script>

{#snippet background(src: string, idx: number)}
	<enhanced:img
		{src}
		alt={`Background ${idx}`}
		class="absolute inset-0 size-full object-cover brightness-50 grayscale transition-opacity duration-1000"
		class:opacity-0={idx !== currentBackgroundIndex}
		loading="eager"
	/>
{/snippet}

<div class="size-full">
	{#each imageSourcesShuffled as src, idx}
		{@render background(src, idx)}
	{/each}
</div>
