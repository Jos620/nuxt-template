<script setup lang="ts">
import { type Theme, THEME_KEY } from '@/lib/theme';

const themeCookie = useCookie<Theme>(THEME_KEY);
const isDark = useDark({
  onChanged(_, defaultHandler, mode) {
    themeCookie.value = mode;
    defaultHandler(mode);
  },
  initialValue: themeCookie,
});
</script>

<template>
  <div h-svh relative col>
    <main h-full center col="<sm:~" gap-2 px-4>
      <slot />
    </main>

    <div absolute bottom-4 right-4 center gap-4>
      <Counter />

      <UiButton @click="() => (isDark = !isDark)">
        <div v-if="isDark" i-mdi:weather-night />
        <div v-else i-mdi:white-balance-sunny />
      </UiButton>
    </div>
  </div>
</template>
