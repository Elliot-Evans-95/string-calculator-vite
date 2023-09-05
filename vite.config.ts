import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [],
   test: {
      globals: true,
      setupFiles: ['vitest-setup.ts'],
      environment: 'jsdom',
   },
   resolve: {
      alias: {
         src: path.resolve(__dirname, './src'),
      },
   },
});
