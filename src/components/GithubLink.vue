<script setup lang="ts">
import { Primitive, type PrimitiveProps } from 'radix-vue';

import { githubRepoLink } from '@/lib/github';

withDefaults(defineProps<PrimitiveProps>(), {
  as: 'a',
  href: githubRepoLink,
});
</script>

<template>
  <Primitive
    target="_blank"
    v-bind="{
      ...$props,
      ...$attrs,
    }"
  >
    <slot>
      <div i-mdi:github class="h-12 w-12" />
    </slot>
  </Primitive>
</template>
