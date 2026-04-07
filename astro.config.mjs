// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // <-- 1. Importamos el sitemap
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://cerrajeriawally.com.ar', // <-- 2. Le decimos tu dominio oficial
  trailingSlash: 'never', 
  integrations: [
    sitemap(), 
    partytown({
      // <-- 3. Configuración CRÍTICA para que Tag Manager reciba los datos
      config: {
        forward: ['dataLayer.push'],
      },
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'always', 
  }
});