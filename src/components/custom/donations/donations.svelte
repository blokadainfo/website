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
  <h2 class="text-center text-2xl">Novčane donacije</h2>
  <p class="text-justify leading-tight">
    Novčane donacije možete doneti <b>uživo na Prirodno-matematički fakultet</b> u Novom Sadu ili na
    Vaš
    <b>lokalni zbor</b>.
  </p>
  <p class="text-justify leading-tight">
    Takođe je moguća <b>uplata na račun</b> ako nam se <b>obratite na email</b> adresu
    <a href="mailto:donacije@blokada.info" class="text-teal-500 underline">donacije@blokada.info</a
    >.
  </p>
  <p class="text-justify leading-tight">
    <b>Iz inostranstva</b> možete donirati online putem portala
    <a href="https://podrzistudente.org" class="font-bold text-teal-500 underline"
      >podrzistudente.org</a
    >.
    <b>Obavezno naglasite</b> u komentaru da je uplata <b>namenjena redakciji Blokada INFO</b>.
  </p>
  <h2 class="text-center text-2xl">Potrebna oprema za rad</h2>
  <p class="text-center text-lg font-bold text-red-400">
    Sve stavke sa oznakom "HITNO" su nam potrebne za prenos 31.10.2025. i 1.11.2025.
  </p>
  <p class="text-justify leading-tight">
    U tabeli ispod se nalaze sve potrepštine našeg tima, uz priložene linkove ka stranicama gde ih
    je moguće kupiti. U slučaju da znate način da nabavite predmet za manju cenu ili da ga kupite
    polovno, to je svakako bolja opcija.
  </p>
  <p class="text-center text-lg font-bold">
    Pre poručivanja bilo čega obratite nam se na email adresu:
    <a href="mailto:donacije@blokada.info" class="text-teal-500 underline">donacije@blokada.info</a>
  </p>
  <Table {donations} />
</div>
