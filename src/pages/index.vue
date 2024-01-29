<script setup lang="ts">
import type { TestResponse } from '@/server/api/test';

const { data } = useFetch<TestResponse>('/api/test');

const isDark = useDark();

const githubRepoLink = 'https://github.com/jos620/nuxt-template';
const githubRepoName = githubRepoLink.split('/').slice(-2).join('/');
</script>

<template>
  <main h-screen center gap-2 relative>
    <h1>{{ data?.title }}</h1>

    <UiHoverCard :open-delay="125">
      <UiHoverCardTrigger as-child>
        <a :href="githubRepoLink" target="_blank">
          <div i-mdi:github w-12 h-12></div>
        </a>
      </UiHoverCardTrigger>
      <UiHoverCardContent>
        <a :href="githubRepoLink" flex items-center h-8 gap-4>
          <div i-mdi:github w-8 h-8></div>
          <UiSeparator orientation="vertical" />

          <div col justify-center>
            <p class="text-sm">
              {{ githubRepoName }}
            </p>
            <span class="text-xs text-gray-500">GitHub</span>
          </div>
        </a>
      </UiHoverCardContent>
    </UiHoverCard>

    <div absolute bottom-4 right-4 center gap-4>
      <Counter />

      <ClientOnly>
        <UiButton @click="() => (isDark = !isDark)">
          <div v-if="isDark" i-mdi:weather-night />
          <div v-else i-mdi:white-balance-sunny />
        </UiButton>
      </ClientOnly>
    </div>
  </main>
</template>
