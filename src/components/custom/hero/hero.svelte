<script lang="ts">
  import Backgrounds from './backgrounds.svelte';
  import Countdown from '@components/custom/countdown/countdown.svelte';

  const video = 'https://www.youtube.com/embed/VOmSdSrcjpc?si=8Y5tS05HNip-uain';
  const targetDate = new Date('2025-11-01T09:00:00Z'); // WARN: Use UTC time here
</script>

<div class="relative top-0 left-0 grid h-lvh w-full place-items-center bg-black bg-cover bg-center">
  <div class="animate-fadeIn col-start-1 row-start-1 h-full w-full">
    <Backgrounds />
  </div>
  <div class="col-start-1 row-start-1 h-full w-full bg-black opacity-60"></div>
  <div class="z-0 col-start-1 row-start-1 flex items-center justify-center text-center">
    <div class="max-w-2xl">
      <h1 class="animate-fadeIn mb-5 text-5xl font-bold text-balance text-white">
        TU SMO DA BUDEMO SVETLO U MEDIJSKOM MRAKU
      </h1>
      <!--
			<div class="flex w-full animate-fadeIn justify-center p-2">
				<Countdown {video} {targetDate} />
			</div>
			-->
    </div>
  </div>
</div>
