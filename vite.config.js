import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import seoPages from './scripts/seo-pages.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), seoPages()],
  base: '/',
  publicDir: 'public',
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
  },
})
