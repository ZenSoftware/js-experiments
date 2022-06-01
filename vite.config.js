import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'www',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'www/index.html'),
        sample: resolve(__dirname, 'www/sample/index.html'),
        eventListeners: resolve(__dirname, 'www/event-listeners/index.html'),
        grid: resolve(__dirname, 'www/grid/index.html'),
        webworkers: resolve(__dirname, 'www/webworkers/index.html'),
      },
    },
  },
});
