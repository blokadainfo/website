<script lang="ts">
  import { onMount } from 'svelte';

  const imageModules: Record<string, { default: string }> = import.meta.glob(
    '@assets/backgrounds/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
    { eager: true, query: { enhanced: true } }
  );
  const images = Object.values(imageModules).map((m) => m.default);

  let active = $state(0);
  let order = $state(images.map((_, i) => i));
  let initial = $state(true);

  function shuffle<T>(arr: T[]) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function rotateToStart<T>(arr: T[], start: T) {
    const idx = arr.indexOf(start);
    return idx <= 0 ? arr : [...arr.slice(idx), ...arr.slice(0, idx)];
  }

  function next() {
    const step = (order.indexOf(active) + 1) % order.length;
    active = order[step];
  }

  onMount(() => {
    order = rotateToStart(shuffle(order), 0);

    queueMicrotask(() => {
      initial = false;
    });

    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  });
</script>

<div class="relative size-full">
  {#each images as src, i (src)}
    <img
      {src}
      alt=""
      aria-hidden="true"
      class="absolute inset-0 size-full object-cover brightness-50 grayscale transition-opacity duration-1000"
      class:opacity-0={i !== active || (initial && i === 0)}
      loading="eager"
      decoding="async"
      fetchpriority={i === 0 ? 'high' : 'low'}
    />
  {/each}
</div>
