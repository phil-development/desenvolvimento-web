import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/desenvolvimento-web/',
  plugins: [react()],
  css: {
    preprocessorOptions:
    {
      scss: {
        importer: undefined,
        silenceDeprecation: ['legacy-js-api'],
      },
    },
  },
});