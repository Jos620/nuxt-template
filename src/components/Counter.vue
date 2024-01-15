<script setup lang="ts">
interface Props {
  initialCount?: number;
}
const { initialCount = 0 } = defineProps<Props>();

const store = useCountStore();

store.count = initialCount;
</script>

<template>
  <button
    bg="indigo-500 hover:indigo-600"
    p="x-4 y-2"
    rounded
    cursor-pointer
    @click="store.increment"
  >
    {{ store.count }}
  </button>
</template>
