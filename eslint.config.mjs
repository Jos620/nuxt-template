import fs from 'node:fs';

import prettier from 'eslint-plugin-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

// @ts-check
import nuxt from './.nuxt/eslint.config.mjs';

const tsconfig = JSON.parse(
  fs
    .readFileSync(new URL('./.nuxt/tsconfig.server.json', import.meta.url))
    .toString(),
);

export default nuxt().append({
  plugins: {
    prettier: prettier,
    'simple-import-sort': simpleImportSort,
  },
  ignores: ['dist/', '.nuxt/', 'node_modules/', '.pnpm-store/'],
  rules: {
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          [`^(${Object.keys(tsconfig.compilerOptions.paths).join('|')})`],
          ['^'],
          ['^\\.'],
        ],
      },
    ],
    'no-useless-constructor': 'off',

    'vue/no-multiple-template-root': 'off',
    'vue/require-default-prop': 'off',
    'vue/html-self-closing': 'off',
  },
});
