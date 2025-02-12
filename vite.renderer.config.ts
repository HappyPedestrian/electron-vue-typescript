import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
	envDir: './env',
	resolve: {
		alias: {
			'@': resolve(process.cwd(), 'src'),
			'#': resolve(process.cwd(), 'src/types'),
		},
	},
	plugins: [vue()],
	build: {
		outDir: './.vite/renderer/main_window',
	},
	server: {
		port: 9074,
	},
})
