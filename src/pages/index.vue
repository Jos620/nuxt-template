<script setup lang="ts">
import { githubRepoName } from '@/lib/github';
import type { TitleDTO } from '@/server/dto/title';

const app = useNuxtApp();

const { data } = useFetch<TitleDTO>('/api/test', {
  getCachedData: (key) => app.payload.data[key],
});
</script>

<template>
  <h1>{{ data?.title }}</h1>

  <ExampleGithubLink class="sm:hidden" />

  <UiHoverCard :open-delay="125">
    <UiHoverCardTrigger as-child>
      <ExampleGithubLink class="<sm:hidden" />
    </UiHoverCardTrigger>
    <UiHoverCardContent as-child>
      <ExampleGithubLink class="flex items-center gap-4">
        <div center gap-4 h-9>
          <div i-mdi:github w-8 h-8 />
          <UiSeparator orientation="vertical" />
        </div>

        <div col justify-center gap="2px">
          <p text-small>
            {{ githubRepoName }}
          </p>
          <span text-muted>GitHub</span>
        </div>
      </ExampleGithubLink>
    </UiHoverCardContent>
  </UiHoverCard>
</template>
