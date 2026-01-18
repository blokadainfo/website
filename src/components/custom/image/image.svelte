<script lang="ts">
  let {
    src,
    alt,
    label,
    href,
  }: {
    src: string;
    alt: string;
    label: string;
    href: string | undefined;
  } = $props();
</script>

<div class="not-prose my-5 grid w-full px-0 sm:px-10 xl:px-20">
  <img {src} {alt} class="col-start-1 row-start-1 w-full object-cover" />
  {#if typeof href === 'string' && href !== ''}
    <a
      href={href.startsWith('http') ? href : `https://${href}`}
      class="col-start-1 row-start-1 self-end bg-gradient-to-t from-black to-transparent pt-20 pr-1 pb-1 text-right text-white"
    >
      {label}
    </a>
  {:else}
    <span
      class="col-start-1 row-start-1 self-end bg-gradient-to-t from-black to-transparent pt-20 pr-1 pb-1 text-right text-white"
    >
      {label}
    </span>
  {/if}
</div>
