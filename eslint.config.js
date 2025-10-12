import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import astro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const jsxA11yRecommendedRules = jsxA11y.flatConfigs.recommended.rules;
const astroA11yRules = astro.configs['jsx-a11y-recommended']?.rules ?? {};

export default [
  {
    ignores: ['node_modules', 'dist', '.astro', '.svelte-kit', 'coverage', 'build', 'public'],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  ...astro.configs['flat/recommended'],

  {
    plugins: {
      prettier,
      'jsx-a11y': jsxA11y,
    },
  },

  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      'astro/no-set-html-directive': 'warn',
      ...astroA11yRules,
    },
  },

  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.svelte'],
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^\\$' },
      ],
      'svelte/prefer-svelte-reactivity': 'off',
      'no-async-promise-executor': 'off',
    },
  },

  {
    files: ['**/*.{jsx,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...jsxA11yRecommendedRules,
    },
  },

  {
    rules: {
      'prettier/prettier': 'warn',
    },
  },
];
