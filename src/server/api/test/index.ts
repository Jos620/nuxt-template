import type { TitleDTO } from '~/server/dto/title';

export default defineEventHandler<TitleDTO>(() => {
  return {
    title: 'Nuxt Template!',
  };
});
