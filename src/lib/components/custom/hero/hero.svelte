<script lang="ts">
	import Timer from '$lib/components/custom/timer/timer.svelte';
</script>

<div
	class="hero min-h-screen"
	style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
>
	<div class="hero-overlay bg-opacity-60"></div>
	<div class="hero-content text-center text-neutral-content">
		<div class="sm:max-w-lg">
			<h1 class="mb-5 text-7xl font-bold">БОРБА НИЈЕ ГОТОВА ДОК СЕ ЗАХТЕВИ НЕ ИСПУНЕ</h1>
			<div class="flex w-full justify-center"><Timer targetDate={'2025-02-15T09:00:00Z'} /></div>
		</div>
	</div>
</div>
