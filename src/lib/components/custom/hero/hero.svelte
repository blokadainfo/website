<script lang="ts">
	import Backgrounds from './backgrounds.svelte';
	import Timer from '$lib/components/custom/timer/timer.svelte';
</script>

<div class="hero h-[90lvh]">
	<div class="hero-overlay bg-opacity-60">
		<Backgrounds />
	</div>
	<div class="hero-content text-center text-neutral-content">
		<div class="max-w-lg sm:max-w-2xl">
			<h1 class="xs:text-2xl mb-5 text-3xl font-bold sm:text-4xl md:text-5xl">
				BORBA NIJE GOTOVA DOK SE ZAHTEVI NE ISPUNE
			</h1>
			<div class="flex w-full justify-center">
				<Timer targetDate={'2025-03-01T14:00:00Z'} />
			</div>
		</div>
	</div>
</div>
