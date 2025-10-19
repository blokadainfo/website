<script lang="ts">
  let {
    donations,
  }: {
    donations: {
      name: string;
      pieces?: number;
      missing?: number;
      links?: string[];
    }[];
  } = $props();
</script>

<table class="min-w-full border-collapse border border-gray-200">
  <thead>
    <tr class="bg-gray-100">
      <th class="border border-gray-300 py-2 sm:px-4">Naziv</th>
      <th class="border border-gray-300 py-2 sm:px-4">Kol.</th>
      <th class="border border-gray-300 py-2 sm:px-4">Gde kupiti</th>
    </tr>
  </thead>
  <tbody>
    {#each donations as donation (donation.name)}
      {@const urgent = donation.name.toLowerCase().includes('hitno')}
      <tr class="border-b border-gray-300" class:bg-red-200={urgent}>
        <td class="border border-gray-300 py-2 sm:px-4">{donation.name}</td>
        <td class="border border-gray-300 py-2 text-center sm:px-4">{donation.pieces ?? '♾️'}</td>
        <td class="border border-gray-300 py-2 sm:px-4">
          {#if donation.links && donation.links.length > 0}
            <ul class="space-y-2">
              {#each donation.links as link (link)}
                <li class="break-all">
                  <a
                    href={link}
                    class="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link}
                  </a>
                </li>
              {/each}
            </ul>
          {:else}
            N/A
          {/if}
        </td>
      </tr>
    {/each}
  </tbody>
</table>
