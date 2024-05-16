import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/xuerivera',
  base: '/ready2eat',
  integrations: [tailwind()]
});