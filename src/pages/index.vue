<script setup lang="ts">
import { githubRepoName } from '@/lib/github';
import type { TestResponse } from '@/server/api/test';

const app = useNuxtApp();

const { data } = useFetch<TestResponse>('/api/test', {
  getCachedData: (key) => app.payload.data[key],
});
</script>

<template>
  <h1>{{ data?.title }}</h1>

  <GithubLink class="sm:hidden" />

  <UiHoverCard :open-delay="125">
    <UiHoverCardTrigger as-child>
      <GithubLink class="<sm:hidden" />
    </UiHoverCardTrigger>
    <UiHoverCardContent as-child>
      <GithubLink class="flex items-center gap-4">
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
      </GithubLink>
    </UiHoverCardContent>
  </UiHoverCard>
</template>
