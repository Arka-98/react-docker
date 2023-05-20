/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom'
  },
  server: {
    host: true,
    port: 3000,
    hmr: {
      port: 3010
    },
    watch: {
      usePolling: true
    }
  }
})
