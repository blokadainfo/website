<script lang="ts">
	import Backgrounds from './backgrounds.svelte';
	import Timer from '$lib/components/custom/timer/timer.svelte';
</script>

<div
	class="relative left-0 top-0 grid h-[100dvh] w-full place-items-center bg-black bg-cover bg-center"
>
	<div class="col-start-1 row-start-1 h-full w-full">
		<Backgrounds />
	</div>
	<div class="col-start-1 row-start-1 h-full w-full bg-black opacity-60"></div>
	<div class="z-0 col-start-1 row-start-1 flex items-center justify-center text-center">
		<div class="max-w-2xl">
			<h1 class="mb-5 text-balance text-5xl font-bold text-white sm:text-7xl">
				BORBA NIJE GOTOVA DOK SE ZAHTEVI NE ISPUNE
			</h1>
			<div class="flex w-full justify-center p-2">
				<Timer
					video="https://www.youtube.com/embed/pTtEqdvCk6w?si=j3u7P24SFOf05TgI"
					targetDate={'2025-03-01T14:00:00Z'}
				/>
			</div>
		</div>
	</div>
</div>
