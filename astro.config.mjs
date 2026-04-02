// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // <-- 1. Importamos el sitemap

// https://astro.build/config
export default defineConfig({
  site: 'https://cerrajeriawally.com.ar',// <-- 2. Le decimos tu dominio oficial
  trailingSlash: 'never', 
  integrations: [
    sitemap() // <-- 3. Activamos la integración
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'always', 
  }
});