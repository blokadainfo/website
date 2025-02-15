<script lang="ts">
	import Logo from '$lib/assets/logo/logo-mini.svg';
</script>

<div class="navbar absolute bg-base-300 z-10">
	<div class="flex flex-1 gap-2 px-2 lg:flex-none">
		<img src={Logo} alt="Blokada INFO Logo" class="w-14" />
		<a href="/" class="text-xl font-bold">Блокада ИНФО</a>
	</div>
	<div class="flex flex-1 justify-end px-2">
		<div class="hidden items-stretch sm:flex">
			<a href="#onama" class="btn btn-ghost rounded-btn">О нама</a>
			<a href="#kontakt" class="btn btn-ghost rounded-btn">Контакт</a>
			<a href="#arhivblokade" class="btn btn-ghost rounded-btn">Архив блокаде</a>
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
				<li><a href="#onama">О нама</a></li>
				<li><a href="#kontakt">Контакт</a></li>
				<li><a href="#arhivblokade">Архив блокаде</a></li>
			</ul>
		</div>
	</div>
</div>
