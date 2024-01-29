<script setup lang="ts">
import type { TestResponse } from '@/server/api/test';

const { data } = useFetch<TestResponse>('/api/test');

const isDark = useDark();
</script>

<template>
  <h1>{{ data?.title }}</h1>

  <Counter />

  <UiButton @click="() => (isDark = !isDark)">
    <div v-if="isDark" i-mdi:weather-night />
    <div v-else i-mdi:white-balance-sunny />
  </UiButton>

  <a href="https://github.com/jos620/nuxt-template" target="_blank">
    <div i-mdi:github w-12 h-12></div>
  </a>
</template>
