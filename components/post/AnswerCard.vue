<script lang="ts" setup>
defineProps({
  answerCardTime: String,
})
</script>

<template>
  <div class="answer-card-wrapper">
    <div class="answer-card w-full shadow-lg rounded px-4 pt-6 pb-12">
      <slot />
    </div>
    <div class="answer-card-time text-gray-300">{{ answerCardTime }}</div>
  </div>
</template>

<style lang="css">
.answer-card-wrapper {
  position: relative;
}

.answer-card {
  border-left: 6px solid rgb(236, 177, 190);
}
.answer-card-time {
  position: absolute;
  bottom: 8px;
  right: 28px;
}
</style>
