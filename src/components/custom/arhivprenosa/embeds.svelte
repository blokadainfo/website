<script lang="ts">
  let {
    title,
    embeds,
  }: {
    title: string;
    embeds: {
      title: string;
      id: string;
    }[];
  } = $props();
</script>

<div class="mx-auto flex max-w-screen-lg flex-col space-y-6">
  <h1 class="xs:text-lg text-center text-xl font-black sm:text-2xl md:text-3xl">
    {title}
  </h1>
  <div
    class="grid grid-cols-1 gap-2"
    class:md:grid-cols-2={embeds.length === 2}
    class:md:grid-cols-3={embeds.length >= 3}
  >
    {#each embeds as { title, id } (id)}
      <div class="relative h-0 overflow-hidden pb-[56.25%]">
        <iframe
          class="absolute inset-0 size-full"
          src="https://www.youtube.com/embed/{id}"
          {title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    {/each}
  </div>
</div>
