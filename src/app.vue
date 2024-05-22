<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';

import { type Theme, THEME_KEY } from '@/lib/theme';

const themeCookie = useCookie<Theme>(THEME_KEY);
useDark({
  onChanged(_, defaultHandler, mode) {
    themeCookie.value = mode;
    defaultHandler(mode);
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

<style src="@unocss/reset/tailwind.css"></style>
<style src="~/assets/styles/typography.scss" lang="scss"></style>
