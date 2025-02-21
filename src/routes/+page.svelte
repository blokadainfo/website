<script lang="ts">
	import Hero from '$lib/components/custom/hero/hero.svelte';
</script>

<Hero />

<div class="h-lvh">
	<div class="grid h-20">
		<div class="bg-danger col-start-1 row-start-1 h-full"></div>
		<div class="col-start-1 row-start-1 h-full bg-gradient-to-b from-black to-transparent"></div>
	</div>
	<div class="w-full h-full flex justify-center items-center font-bold text-7xl">U IZRADI</div>
</div>

<style>
	.bg-danger {
		background-image: repeating-linear-gradient(
			-55deg,
			#000,
			#000 20px,
			#ffb101 20px,
			#ffb101 40px
		);
	}
</style>
