<script setup lang="ts">
const store = useCountStore();
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
