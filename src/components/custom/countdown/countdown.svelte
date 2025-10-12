<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { calculateTimeRemaining, pluralize } from './utils';

  let {
    video,
    targetDate,
  }: {
    video: string;
    targetDate: Date;
  } = $props();

  let remainingTime = $state(calculateTimeRemaining(targetDate));
  const timeUnits = $derived([
    { value: remainingTime.days, label: pluralize(remainingTime.days, ['dan', 'dana', 'dana']) },
    { value: remainingTime.hours, label: pluralize(remainingTime.hours, ['sat', 'sata', 'sati']) },
    {
      value: remainingTime.minutes,
      label: pluralize(remainingTime.minutes, ['minut', 'minuta', 'minuta']),
    },
    {
      value: remainingTime.seconds,
      label: pluralize(remainingTime.seconds, ['sekunda', 'sekunde', 'sekundi']),
    },
  ]);

  onMount(() => {
    const interval = setInterval(() => {
      remainingTime = calculateTimeRemaining(targetDate);
    }, 1000);
    return () => clearInterval(interval);
  });
</script>

{#snippet countdown(value: number, label: string)}
  <div class="flex flex-col rounded-3xl bg-black p-2 opacity-80">
    <span class="countdown text-5xl text-white sm:text-7xl">
      <span style="--value:{value};"></span>
    </span>
    <div class="relative h-6">
      {#key label}
        <span
          transition:fade={{ duration: 250 }}
          class="absolute inset-0 flex items-center justify-center text-center text-white"
        >
          {label}
        </span>
      {/key}
    </div>
  </div>
{/snippet}

{#if timeUnits.every((unit) => unit.value >= 0)}
  <div class="grid auto-cols-max grid-flow-col gap-2 text-center sm:gap-5">
    {#each timeUnits as { value, label } (label)}
      {@render countdown(value, label)}
    {/each}
  </div>
{:else}
  <div class="aspect-video w-full bg-zinc-950">
    <!-- example regular src: https://www.youtube.com/embed/pTtEqdvCk6w?si=j3u7P24SFOf05TgI -->
    <!-- example privacy src: https://www.youtube-nocookie.com/embed/7smG_3QdYtw?si=xZUvfuqIsjZxFa7M -->
    <iframe
      width="100%"
      height="100%"
      src="{video}&amp;controls=0"
      title="PRENOS UŽIVO"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
{/if}

<style>
  .countdown {
    display: inline-flex;
    & > * {
      height: 1em;
      @apply inline-block overflow-y-hidden;
      &:before {
        position: relative;
        content: '00\A 01\A 02\A 03\A 04\A 05\A 06\A 07\A 08\A 09\A 10\A 11\A 12\A 13\A 14\A 15\A 16\A 17\A 18\A 19\A 20\A 21\A 22\A 23\A 24\A 25\A 26\A 27\A 28\A 29\A 30\A 31\A 32\A 33\A 34\A 35\A 36\A 37\A 38\A 39\A 40\A 41\A 42\A 43\A 44\A 45\A 46\A 47\A 48\A 49\A 50\A 51\A 52\A 53\A 54\A 55\A 56\A 57\A 58\A 59\A 60\A 61\A 62\A 63\A 64\A 65\A 66\A 67\A 68\A 69\A 70\A 71\A 72\A 73\A 74\A 75\A 76\A 77\A 78\A 79\A 80\A 81\A 82\A 83\A 84\A 85\A 86\A 87\A 88\A 89\A 90\A 91\A 92\A 93\A 94\A 95\A 96\A 97\A 98\A 99\A';
        white-space: pre;
        top: calc(var(--value) * -1em);
        text-align: center;
        transition: all 1s cubic-bezier(1, 0, 0, 1);
      }
    }
  }
</style>
