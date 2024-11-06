import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/Fast-Work/',
  server: {
    host: '0.0.0.0',
    port: 8080,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // имя файла должно соответствовать основному файлу вашего проекта
        page: resolve(__dirname, 'src/pages/main.html') // добавьте другие страницы, если они есть
      }
    }
  }
});
