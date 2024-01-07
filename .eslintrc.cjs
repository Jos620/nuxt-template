const { compilerOptions } = require('./.nuxt/tsconfig.server.json');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'prettier'],
  plugins: ['prettier', 'simple-import-sort'],
  rules: {
    'import/order': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'],
          ['^node:'],
          ['^@?\\w'],
          [`^(${Object.keys(compilerOptions.paths).join('|')})`],
          ['^'],
          ['^\\.'],
        ],
      },
    ],
  },
};
