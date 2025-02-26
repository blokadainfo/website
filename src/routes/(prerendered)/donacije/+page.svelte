<script lang="ts">
	import Table from '$lib/components/custom/donations/table.svelte';
	import { donations } from './donations';
</script>

<div class="mx-auto mb-8 flex w-full max-w-screen-sm flex-col space-y-8 p-2 sm:mt-28">
	<h1 class="text-center text-3xl font-bold">Donacije za redakciju Blokada INFO</h1>
	<p class="text-justify">
		Na ovoj stranici se nalaze sve potrebštine našeg tima. Svi artikli koji imaju specificiran naziv
		su tačno oni modeli koji su nam potrebni dok više generična imena ukazuju na to da nam model
		nije bitan. Takođe su priloženi i linkovi ka sajtevima gde ih je moguće kupiti, doduše to je
		samo smernica, ako je moguće nabaviti za manju cenu ili čak uzeti polovno to je svakako bolja
		opcija. Artikle linkovane ka sajtu <a href="https://ipon.hu" class="italic">ipon.hu</a> je
		moguće poručiti preko
		<a href="https://www.kupujemprodajem.com" class="underline">Kupujem Prodajem</a>.
	</p>
	<Table {donations} />
</div>
