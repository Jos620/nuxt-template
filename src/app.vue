<script setup lang="ts">
import { SpeedInsights } from '@vercel/speed-insights/nuxt';
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <SpeedInsights />
</template>

<style src="./app.scss"></style>
