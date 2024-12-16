import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['express', 'url', 'http', 'path', 'fs'], // Exclude Node.js modules from frontend build
    },
  },
});
