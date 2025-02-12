import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
/** @ts-ignore */
import autoEslint from 'vite-plugin-eslint'

// https://vite.dev/config/
export default defineConfig({
	envDir: './env',
	mode: process.env.VITE_CONFIG_MODE || undefined,
	resolve: {
		alias: {
			'@': resolve(process.cwd(), 'src'),
			'#': resolve(process.cwd(), 'src/types'),
		},
	},
	plugins: [
		vue(),
		autoEslint({
			cache: false,
			// fix 配置是否进行格式化
			fix: false,
			lintOnStart: false,
			include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.vue'],
			emitWarning: true,
			emitError: true,
			failOnError: true,
		}),
	],
	build: {
		outDir: './.vite/renderer/main_window',
	},
	server: {
		port: 9074,
	},
})
