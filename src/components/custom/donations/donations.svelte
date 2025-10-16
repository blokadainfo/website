<script lang="ts">
  import Table from './table.svelte';
  import { donations } from './donations';
  import { dateToSRB } from '@functions/datetosrb';
</script>

<div class="mx-auto mb-8 flex w-full max-w-screen-sm flex-col space-y-8 p-2 sm:mt-28">
  <h1 class="text-center text-3xl font-bold">Donacije za redakciju Blokada INFO</h1>
  <span class="text-right text-sm font-light">
    Lista ažurirana {dateToSRB()}
  </span>
  <p class="text-justify">
    Novčane donacije su moguće uživo na Prirodno-matematičkom fakultetu u Novom Sadu i online putem
    portala <a href="https://podrzistudente.org" class="underline">podrzistudente.org</a>, uz
    obaveznu napomenu da su namenjene redakciji Blokada INFO.
  </p>
  <p class="text-justify">
    Na ovoj stranici se nalaze sve potrepštine našeg tima. Svi artikli koji imaju specificiran naziv
    su tačno oni modeli koji su nam potrebni dok manje precizni opisi ukazuju na to da nam model
    nije bitan. Takođe su priloženi i linkovi ka stranicama gde ih je moguće kupiti, ali to je samo
    smernica. U slučaju da je moguće nabaviti predmet za manju cenu ili ga kupiti kao polovan, to je
    svakako bolja opcija.
  </p>
  <p class="text-justify">
    Pre poručivanja bilo čega obratite nam se na email adresu:
    <a href="mailto:donacije@blokada.info" class="underline">donacije@blokada.info</a>
  </p>
  <Table {donations} />
</div>
