import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves the site from /essam/
export default defineConfig({
  base: '/essam/',
  plugins: [react()],
  build: { outDir: 'dist' },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
