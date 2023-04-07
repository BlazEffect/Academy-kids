import { defineConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';
import react from '@vitejs/plugin-react'
import laravel from 'laravel-vite-plugin';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/app.jsx'],
      refresh: true,
    }),
    react()
  ],
  build: {
    manifest: true,
    outDir: 'public/build',
    rollupOptions: {
        input: 'resources/js/app.js',
    },
},
  css: {
    devSourcemap: true,
  },
});
