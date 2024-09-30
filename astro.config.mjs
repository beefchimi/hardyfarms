// @ts-check
import {defineConfig} from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://hellohardy.com',
  devToolbar: {
    enabled: false,
  },
  server: {
    port: 3000,
    // host: '192.168.2.27',
  },
  vite: {
    // TODO: Figure out how to get this to work.
    preview: {
      port: 8000,
      strictPort: true,
    },
    css: {
      transformer: 'lightningcss',
      lightningcss: {
        drafts: {
          customMedia: true,
        },
      },
    },
  },
  integrations: [
    icon({
      iconDir: 'src/assets/svg',
    }),
  ],
});
