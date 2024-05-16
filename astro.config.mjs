import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://xuerivera.github.io/ready2eat',
  base: '/ready2eat/',
  integrations: [tailwind()],
  build: {
    outDir: 'dist'
  }
});
