<script lang="ts" setup>
defineProps({
  bgColor: String,
  hoverBgColor: String,
})
</script>

<template>
  <div class="circle-button">
    <button
      class="h-24 w-24 flex items-center justify-center rounded-full shadow-md"
      :class="[bgColor, hoverBgColor]"
    >
      <slot />
    </button>
  </div>
</template>
