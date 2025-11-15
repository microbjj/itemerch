import js from '@eslint/js'
import globals from 'globals'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        plugins: {
            js,
            prettier: prettierPlugin,
        },
        extends: ['js/recommended', prettierConfig],
        languageOptions: { globals: globals.browser },
        rules: {
            ...pluginReact.configs.flat.recommended,
            ...prettierPlugin.configs.recommended.rules,
            curly: 'warn',
            'no-console': 'warn',
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'react/react-in-jsx-scope': 'off',
        },
    },
])
