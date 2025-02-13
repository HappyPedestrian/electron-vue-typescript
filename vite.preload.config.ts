import { defineConfig } from 'vite'

// https://vitejs.dev/config
export default defineConfig({
  envDir: './env',
  mode: process.env.VITE_CONFIG_MODE || undefined
})
