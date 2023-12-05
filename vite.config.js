import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'www',
  build: {
    rollupOptions: {
      input: {
        comlink: resolve(__dirname, 'www/comlink/index.html'),
        cookies: resolve(__dirname, 'www/cookies/index.html'),
        eventListeners: resolve(__dirname, 'www/event-listeners/index.html'),
        grid: resolve(__dirname, 'www/grid/index.html'),
        immer: resolve(__dirname, 'www/immer/index.html'),
        main: resolve(__dirname, 'www/index.html'),
        postMessage: resolve(__dirname, 'www/post-message/index.html'),
        postWindow: resolve(__dirname, 'www/post-message/post-window/index.html'),
        sample: resolve(__dirname, 'www/sample/index.html'),
        shadowDom: resolve(__dirname, 'www/shadow-dom/index.html'),
        webgl: resolve(__dirname, 'www/webgl/index.html'),
        webworkers: resolve(__dirname, 'www/webworkers/index.html'),
      },
    },
  },
});
