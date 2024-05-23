<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

import { type Theme, THEME_KEY } from '@/lib/theme';

const themeCookie = useCookie<Theme>(THEME_KEY);
useDark({
  onChanged(isDark) {
    themeCookie.value = isDark ? 'dark' : 'light';
  },
  initialValue: themeCookie,
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <SpeedInsights />
</template>

<style src="./app.scss"></style>
