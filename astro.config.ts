// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import { remarkReadingTime } from './src/functions/remark-reading-time';

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

  integrations: [svelte(), mdx({ remarkPlugins: [remarkReadingTime] })],

  markdown: {
    remarkRehype: {
      footnoteLabel: 'Fusnote',
    },
  },
});
