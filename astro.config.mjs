// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

const isProd = process.env.NODE_ENV === 'production';

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      svelte({
        onwarn: (warning, handler) => {
          if (isProd) return;
          handler(warning);
        },
      }),
    ],
  },

  integrations: [svelte(), mdx()],

  markdown: {
    remarkRehype: {
      footnoteLabel: 'Fusnote',
    },
  },
});
