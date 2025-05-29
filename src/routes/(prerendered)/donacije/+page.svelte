<script lang="ts">
	import Table from '$lib/components/custom/donations/table.svelte';
	import { donations } from './donations';
</script>

<div class="mx-auto mb-8 flex w-full max-w-screen-sm flex-col space-y-8 p-2 sm:mt-28">
	<h1 class="text-center text-3xl font-bold">Donacije za redakciju Blokada INFO</h1>
	<p class="text-justify">
		Donacije u kešu možete doneti u centralnu zgradu univerziteta u Novom Sadu (rektorat), kod redarskog stola, uz napomenu da su namenjene redakciji Blokada INFO.
		Adresa je Dr. Zorana Đinđića 1, Novi Sad 21000.
	</p>
	<p class="text-justify">
		Na ovoj stranici se nalaze sve potrepštine našeg tima. Svi artikli koji imaju specificiran naziv
		su tačno oni modeli koji su nam potrebni dok više generična imena ukazuju na to da nam model
		nije bitan. Takođe su priloženi i linkovi ka stranicama gde ih je moguće kupiti, doduše to je
		samo smernica, ako je moguće nabaviti za manju cenu ili čak uzeti polovno to je svakako bolja
		opcija.
	</p>
	<p class="text-justify">
		Pre poručivanja bilo čega obratite nam se na email adresu:
		<a href="mailto:donacije@blokada.info" class="underline">donacije@blokada.info</a>
	</p>
	<Table {donations} />
</div>
