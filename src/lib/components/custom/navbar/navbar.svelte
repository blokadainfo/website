<script lang="ts">
	import Logo from '$lib/assets/logo/logo-full.svg';
</script>

<div class="navbar absolute bg-base-300 z-10">
	<div class="flex flex-1 gap-2 px-2 lg:flex-none">
        <!-- Bolje koristiti logo-mini (Mogućnost da sajt bude i na ćirilici i na latinici) -->
		<img src={Logo} alt="Blokada INFO Logo" class="h-14" />
	</div>
	<div class="flex flex-1 justify-end px-2">
		<div class="hidden items-stretch sm:flex">
			<a href="#onama" class="btn btn-ghost rounded-btn">O nama</a>
			<a href="#kontakt" class="btn btn-ghost rounded-btn">Kontakt</a>
			<a href="#arhivblokade" class="btn btn-ghost rounded-btn">Arhiv blokade</a>
		</div>
		<div class="dropdown dropdown-end sm:hidden">
			<div tabindex="0" role="button" class="btn btn-ghost rounded-btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"
					></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
				>
			</div>
			<ul class="menu dropdown-content z-[1] mt-4 w-48 rounded-box bg-base-100 p-2 shadow">
				<li><a href="#onama">O nama</a></li>
				<li><a href="#kontakt">Kontakt</a></li>
				<li><a href="#arhivblokade">Arhiv blokade</a></li>
			</ul>
		</div>
	</div>
</div>
