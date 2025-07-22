// vite.config.js
import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  base: './', // ou '/evandroripka/' se o site for servido nesse subpath
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})
