/** @typedef {import('eslint').Linter.FlatConfig[]} Config */

import jsdoc from 'eslint-plugin-jsdoc';
import globals from 'globals';

import js from '@eslint/js';

/** @type {Config} */
const baseConfig = [
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
];

/** @type {Config} */
const jsConfig = [js.configs.recommended];

/** @type {Config} */
const jsdocConfig = [
  {
    ...jsdoc.configs['flat/recommended'],
    files: ['**/*.js', '**/*.jsx'],
  },
  {
    ...jsdoc.configs['flat/recommended-typescript'],
    files: ['**/*.ts', '**/*.tsx'],
  },
].map((config) => ({
  ...config,
  rules: {
    ...config.rules,
    'jsdoc/tag-lines': ['warn', 'any', { startLines: 1 }],
  },
}));

/** @type {Config} */
export default [...baseConfig, ...jsConfig, ...jsdocConfig];
