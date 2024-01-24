<script setup lang="ts">
import type { TestResponse } from '@/server/api/test';

const { data } = useFetch<TestResponse>('/api/test');
</script>

<template>
  <h1 text-4xl>{{ data?.title }}</h1>

  <Counter />

  <a href="https://github.com/jos620/nuxt-template" target="_blank">
    <div i-mdi:github w-12 h-12></div>
  </a>
</template>
