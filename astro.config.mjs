import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://the-b-context.com',
  base: '/',
  output: 'static',
  // Trailing slash cohérent : évite les doublons d'URL et les chaînes de redirection côté moteurs
  trailingSlash: 'always',
  // Page Mainteneurs retirée du site public (ADR-006) : redirection vers À propos
  // Interventions supprimée au pivot Mission Savoir Critique : liens externes déjà diffusés, redirection vers la home
  redirects: {
    '/mainteneurs/': '/a-propos/',
    '/interventions/': '/',
  },
  integrations: [
    sitemap({
      // Exclut les pages de redirection du sitemap (ne pas indexer une page qui redirige)
      filter: (page) => !page.includes('/mainteneurs') && !page.includes('/interventions'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
