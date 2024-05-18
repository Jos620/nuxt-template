export default defineNuxtPlugin(async () => {
  if (import.meta.env.TEST) return;

  const { inject } = await import('@vercel/analytics');

  inject();
});
