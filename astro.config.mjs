// @ts-check
import { defineConfig, envField } from 'astro/config';
import { loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'; // <-- 1. Importamos el sitemap

// --- La config no tiene acceso a astro:env, así que leemos el .env con Vite ---
const { PUBLIC_SITE_URL } = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
if (!PUBLIC_SITE_URL) {
  throw new Error('Falta PUBLIC_SITE_URL en el archivo .env (ej: https://cerrajeriawally.com.ar)');
}

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_SITE_URL, // <-- 2. Tu dominio oficial (viene del .env)
  trailingSlash: 'always',
  integrations: [
    sitemap(), ],
  // <-- 3. Variables del .env validadas en el build (si falta alguna, el build avisa)
  env: {
    schema: {
      PUBLIC_TELEPHONE: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_TELEPHONE_DISPLAY: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_GTM_ID: envField.string({ context: 'client', access: 'public' }),
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({ context: 'client', access: 'public' }),
    },
  },
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
    inlineStylesheets: 'always',
  }
});
