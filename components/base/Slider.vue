<template>
  <div>
    <input
      type="range"
      min="1"
      max="10"
      step="1"
      value="5"
      class="w-full cursor-pointer appearance-none bg-black h-px slider"
    >
  </div>
</template>

<style scoped>
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  position: relative;
  border: none;
  width: 25px;
  height: 25px;
  display: block;
  background-color: #0500FF;
  border-radius: 50%;
  -webkit-border-radius: 50%;
}
</style>