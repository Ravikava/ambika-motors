import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

// Plugin: copy index.html to 404.html for GitHub Pages SPA routing
function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      const outDir = resolve(__dirname, 'dist')
      copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), copy404Plugin()],
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
