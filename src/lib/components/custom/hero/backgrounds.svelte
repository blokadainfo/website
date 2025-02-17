<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const interval = setInterval(changeBackground, 3000);
		return () => clearInterval(interval);
	});

	const imageModules = import.meta.glob(
		'$lib/assets/backgrounds/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true, // TODO?
			query: {
				enhanced: true
			}
		}
	);

	const imagesNum = Object.keys(imageModules).length;
	if (imagesNum < 1) {
		throw new Error('at least one image must exist');
	}

	let imageIndexA = $state(0);
	let imageIndexB = $state(imagesNum === 1 ? 0 : 1);
	let isImageAVisible = $state(true);

	const imageA = $derived(Object.keys(imageModules).find((_value, index) => index === imageIndexA));
	const imageB = $derived(Object.keys(imageModules).find((_value, index) => index === imageIndexB));

	function getRandomImageIndex(): number {
		if (imagesNum < 3) {
			throw new Error('cannot get random image index when imagesNum is less than 3');
		}

		while (true) {
			const randomIndex = Math.floor(Math.random() * imagesNum) + 1;
			if (randomIndex !== imageIndexA && randomIndex !== imageIndexB) {
				return randomIndex;
			}
		}
	}

	function changeBackground(): void {
		if (imagesNum === 1) return;
		if (imagesNum === 2) {
			isImageAVisible = !isImageAVisible;
			return;
		}

		if (isImageAVisible) {
			imageIndexB = getRandomImageIndex();
		} else {
			imageIndexA = getRandomImageIndex();
		}
		isImageAVisible = !isImageAVisible;
	}
</script>

<img
	src={imageA}
	alt="Background A"
	class="size-full object-cover brightness-50 grayscale transition-opacity duration-1000"
	class:opacity-0={!isImageAVisible}
	loading="eager"
/>
<img
	src={imageB}
	alt="Background B"
	class="size-full object-cover brightness-50 grayscale transition-opacity duration-1000"
	class:opacity-0={isImageAVisible}
	loading="eager"
/>
