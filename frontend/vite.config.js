import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~/bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  base: '/',
  build: {
    assetsDir: '',
  },
  optimizeDeps: {
    include: [
      // Dependencias que deben ser pre-bundled
    ],
  },
});

 */