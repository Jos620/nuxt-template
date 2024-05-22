<script setup lang="ts">
import type { TestResponse } from '@/server/api/test';

const app = useNuxtApp();

const { data } = useFetch<TestResponse>('/api/test', {
  getCachedData: (key) => app.payload.data[key],
});

const githubRepoLink = 'https://github.com/jos620/nuxt-template';
const githubRepoName = githubRepoLink.split('/').slice(-2).join('/');
</script>

<template>
  <h1>{{ data?.title }}</h1>

  <a class="sm:hidden" :href="githubRepoLink" target="_blank">
    <div i-mdi:github w-12 h-12></div>
  </a>

  <UiHoverCard :open-delay="125">
    <UiHoverCardTrigger as-child>
      <a class="<sm:hidden" :href="githubRepoLink" target="_blank">
        <div i-mdi:github w-12 h-12></div>
      </a>
    </UiHoverCardTrigger>
    <UiHoverCardContent as-child>
      <a :href="githubRepoLink" target="_blank" flex items-center gap-4>
        <div center gap-4 h-9>
          <div i-mdi:github w-8 h-8></div>
          <UiSeparator orientation="vertical" />
        </div>

        <div col justify-center gap="2px">
          <p text-small>
            {{ githubRepoName }}
          </p>
          <span text-muted>GitHub</span>
        </div>
      </a>
    </UiHoverCardContent>
  </UiHoverCard>
</template>
