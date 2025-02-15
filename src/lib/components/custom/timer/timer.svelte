<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let targetDate: number | string | Date;

	let interval: number;

	let remainingTime = calculateTimeRemaining();

	function calculateTimeRemaining() {
		const totalSeconds = Math.floor((new Date(targetDate).getTime() - new Date().getTime()) / 1000);

		const years = Math.floor(totalSeconds / (60 * 60 * 24 * 365));
		const months = Math.floor((totalSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
		const days = Math.floor((totalSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
		const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
		const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
		const seconds = Math.floor(totalSeconds % 60);

		return { years, months, days, hours, minutes, seconds };
	}

	function tick() {
		remainingTime = calculateTimeRemaining();
	}

	onMount(() => {
		interval = setInterval(tick, 1000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

{#if remainingTime.days > 0}
	<div class="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-5">
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.days};"></span>
			</span>
			dana
		</div>
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.hours};"></span>
			</span>
			sati
		</div>
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.minutes};"></span>
			</span>
			minuta
		</div>
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.seconds};"></span>
			</span>
			sekundi
		</div>
	</div>
{:else if remainingTime.hours > 0}
	<div class="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-5">
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.hours};"></span>
			</span>
			sati
		</div>
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.minutes};"></span>
			</span>
			minuta
		</div>
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.seconds};"></span>
			</span>
			sekundi
		</div>
	</div>
{:else if remainingTime.minutes > 0}
	<div class="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-5">
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.minutes};"></span>
			</span>
			minuta
		</div>
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.seconds};"></span>
			</span>
			sekundi
		</div>
	</div>
{:else}
	<div class="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-5">
		<div class="flex flex-col rounded-box bg-neutral p-2 text-neutral-content">
			<span class="countdown font-mono text-7xl">
				<span style="--value:{remainingTime.seconds};"></span>
			</span>
			sekundi
		</div>
	</div>
{/if}
