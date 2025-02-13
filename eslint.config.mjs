import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginVue from 'eslint-plugin-vue'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,vue}'] },
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: { sourceType: 'commonjs' }
  },
  { files: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'src/**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  eslintPluginPrettierRecommended,
  { files: ['**/*.vue'], languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    ignores: ['node_modules', 'dist', '.vite', 'out'],
    rules: {
      // ts 文件检查规则
      // 允许 any 类型
      '@typescript-eslint/no-explicit-any': 'off',
      // 允许非空断言
      '@typescript-eslint/no-non-null-assertion': 'off',
      // 允许使用 ts 注释
      '@typescript-eslint/ban-ts-comment': 'off',

      // vue 检查规则
      'vue/multi-word-component-names': 'off'
    }
  }
]
