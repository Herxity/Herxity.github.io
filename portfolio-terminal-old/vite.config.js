import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // This will be the root of Herxity.github.io
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
