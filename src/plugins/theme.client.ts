import { type Theme, THEME_KEY } from '@/lib/theme';

export default defineNuxtPlugin(() => {
  const themeCookie = useCookie<Theme>(THEME_KEY);
  useDark({
    onChanged(isDark) {
      themeCookie.value = isDark ? 'dark' : 'light';
    },
    initialValue: themeCookie,
  });
});
