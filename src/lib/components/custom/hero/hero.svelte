<script lang="ts">
	import { onMount } from 'svelte';
	import Timer from '$lib/components/custom/timer/timer.svelte';

	const imagesNum = 9; // static/backgrounds
	function getRandomImageIndex(): number {
		return Math.floor(Math.random() * imagesNum) + 1; // [1,imagesNum]
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
		const interval = setInterval(changeBackground, 3000); // Change every 3 seconds
		return () => clearInterval(interval);
	});
</script>

<div class="hero relative min-h-screen">
	<div
		class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
		style="background-image: url('{imageUrlA}'); opacity: {isImageVisibleA ? 1 : 0};"
	></div>
	<div
		class="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
		style="background-image: url('{imageUrlB}'); opacity: {!isImageVisibleA ? 1 : 0};"
	></div>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="sm:max-w-lg">
			<h1 class="mb-5 text-7xl font-bold">БОРБА НИЈЕ ГОТОВА ДОК СЕ ЗАХТЕВИ НЕ ИСПУНЕ</h1>
			<div class="flex w-full justify-center">
				<Timer targetDate={'2025-02-15T09:00:00Z'} />
			</div>
		</div>
	</div>
</div>
