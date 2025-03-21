<script lang="ts">
	import Backgrounds from './backgrounds.svelte';
	// import Countdown from '$lib/components/custom/countdown/countdown.svelte';

	const video = 'https://www.youtube.com/embed/_u_ZBq1AhmQ?si=VRspsD0BzqoDUCGl';
	const targetDate = new Date('2025-03-15T12:40:00Z'); // WARN: Use UTC time here
</script>

<div class="relative left-0 top-0 grid h-lvh w-full place-items-center bg-black bg-cover bg-center">
	<div class="col-start-1 row-start-1 h-full w-full animate-fadeIn">
		<Backgrounds />
	</div>
	<div class="col-start-1 row-start-1 h-full w-full bg-black opacity-60"></div>
	<div class="z-0 col-start-1 row-start-1 flex items-center justify-center text-center">
		<div class="max-w-2xl">
			<h1 class="mb-5 animate-fadeIn text-balance text-4xl font-bold text-white">
				Pad nadstrešnice okončao je još jedan život, a odgovornih nema.
			</h1>
			<!-- <h1 class="mb-5 animate-fadeIn text-balance text-5xl font-bold text-white">
				BORBA NIJE GOTOVA DOK SE ZAHTEVI NE ISPUNE
			</h1>
			<div class="flex w-full animate-fadeIn justify-center p-2">
				<Countdown {video} {targetDate} />
			</div> -->
		</div>
	</div>
</div>
