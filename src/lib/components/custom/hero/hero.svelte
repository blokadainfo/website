<script lang="ts">
	import { onMount } from 'svelte';
	import Timer from '$lib/components/custom/timer/timer.svelte';

	const imagesNum = 9;
	function getRandomImageIndex(): number {
		return Math.floor(Math.random() * imagesNum) + 1;
	}

	let imageIndexA = $state(getRandomImageIndex());
	let imageIndexB = $state(getRandomImageIndex());
	let isImageVisibleA = $state(true);

	const imageUrlA = $derived(`/backgrounds/${imageIndexA}.jpg`);
	const imageUrlB = $derived(`/backgrounds/${imageIndexB}.jpg`);

	function changeBackground(): void {
		if (isImageVisibleA) {
			imageIndexB = getRandomImageIndex();
		} else {
			imageIndexA = getRandomImageIndex();
		}

		isImageVisibleA = !isImageVisibleA;
	}

	onMount(() => {
		const interval = setInterval(changeBackground, 3000);
		return () => clearInterval(interval);
	});
</script>

<div class="hero">
	<img
		src={imageUrlA}
		alt="A"
		class="brightness-50 grayscale transition-opacity duration-1000"
		class:opacity-0={!isImageVisibleA}
	/>
	<img
		src={imageUrlB}
		alt="B"
		class="brightness-50 grayscale transition-opacity duration-1000"
		class:opacity-0={isImageVisibleA}
	/>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-lg sm:max-w-2xl">
			<h1 class="mb-5 text-5xl font-bold">BORBA NIJE GOTOVA DOK SE ZAHTEVI NE ISPUNE</h1>
			<div class="flex w-full justify-center"><Timer targetDate={'2025-02-15T09:00:00Z'} /></div>
		</div>
	</div>
</div>
