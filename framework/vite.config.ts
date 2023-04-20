import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'sandbox/',
  plugins: [ react() ],
  server: {
    port: 3008,
    fs: {
      strict: false,
    },
  },
  build: {
    outDir: 'dist',
  },
})
