import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://the-b-context.com',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
