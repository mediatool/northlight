/* eslint-disable */
import { defineConfig } from 'vite'
import path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  root: 'sandbox/',
  server: {
    port: 3008,
    fs: {
      strict: false,
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname),
      '~lib': path.resolve(__dirname, 'lib')
    }
  },
  plugins: [ reactRefresh() ],
})
