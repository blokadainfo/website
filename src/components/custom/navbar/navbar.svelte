<script lang="ts">
  import { onMount } from 'svelte';
  import NavbarDesktop from './navbar-desktop.svelte';
  import NavbarMobile from './navbar-mobile.svelte';

  let {
    homepage,
  }: {
    homepage: boolean;
  } = $props();

  const items = [
    {
      href: '/o-nama',
      text: 'O NAMA',
    },
    {
      href: '/donacije',
      text: 'DONACIJE',
    },
    // {
    // 	href: '/arhiv-prenosa',
    // 	text: 'ARHIV PRENOSA'
    // },
    {
      href: '/vesti/2025-02-25-vaznost-sednice-strucnog-veca',
      text: 'VAŽNOST SEDNICE',
    },
  ];

  let y = $state(0);
  let screenHeight: number = $state(420420);

  onMount(() => {
    screenHeight = window.innerHeight;
  });
</script>

<div class="hidden xl:block">
  <NavbarDesktop {homepage} {items} {y} {screenHeight} />
</div>
<div class="block xl:hidden">
  <NavbarMobile {homepage} {items} {y} {screenHeight} />
</div>

<svelte:window bind:scrollY={y} />
