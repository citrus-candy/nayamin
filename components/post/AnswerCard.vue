<script lang="ts" setup>
defineProps({
  text: String,
  time: String,
})
</script>

<template>
  <div class="w-full shadow-lg rounded p-4 border-l-8 border-pink-300">
    <p class="h-24 min-h-full">{{ text }}</p>
    <p class="text-gray-300 text-right">{{ time }}</p>
  </div>
</template>
