<script>
	import { page } from '$app/state';

	let { y, screenWidth, screenHeight } = $props();
</script>

<div
	class="fixed top-0 z-10 hidden h-svh flex-col justify-center sm:flex {page.route.id === '/'
		? 'animate-fadeIn'
		: ''}"
>
	<div class="m-6 flex flex-col gap-2 text-xl font-bold">
		<span
			><a
				href="/o-nama"
				class="{page.route.id === '/' && y < screenHeight / 2 + 50 + 60
					? 'text-white hover:text-white/50'
					: 'text-black hover:text-black/50'} transition-colors duration-500">O NAMA</a
			></span
		>
		<a
			href="/arhiv-prenosa"
			class="{page.route.id === '/' && y < screenHeight / 2 + 50 + 30
				? 'text-white hover:text-white/50'
				: 'text-black hover:text-black/50'} transition-colors duration-500">ARHIV PRENOSA</a
		>
		<!--<a
				href="/arhiv-protesta"
				class="{page.route.id === '/' && y < screenHeight / 2 + 50 + 0
					? 'text-white hover:text-white/50'
					: 'text-black hover:text-black/50'} transition-colors duration-500">ARHIV PROTESTA</a
			>-->
	</div>
</div>
