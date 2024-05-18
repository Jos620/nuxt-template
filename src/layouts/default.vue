<script setup lang="ts">
const isDark = useDark();
</script>

<template>
  <div h-svh relative col>
    <main h-full center col="<sm:~" gap-2 px-4>
      <slot />
    </main>

    <div absolute bottom-4 right-4 center gap-4>
      <Counter />

      <ClientOnly>
        <UiButton @click="() => (isDark = !isDark)">
          <div v-if="isDark" i-mdi:weather-night />
          <div v-else i-mdi:white-balance-sunny />
        </UiButton>
      </ClientOnly>
    </div>
  </div>
</template>
