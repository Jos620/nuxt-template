// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
  hooks: {
    'prepare:types'({ tsConfig }) {
      const aliasToRemove = ['~', '~/*', '~~', '~~/*'];

      aliasToRemove.forEach((alias) => {
        if (tsConfig.compilerOptions?.paths[alias]) {
          delete tsConfig.compilerOptions.paths[alias];
        }
      });
    },
  },
});
