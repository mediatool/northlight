import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  root: 'sandbox/',
  server: {
    port: 3008,
    fs: {
      strict: false,
    },
  },
  plugins: [ reactRefresh() ],
  build: {
    outDir: 'dist',
  },
})
