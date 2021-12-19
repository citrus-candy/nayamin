<script lang="ts" setup>
defineProps({
	circleBgColor: String,
	circleHoverBgColor: String,
})
</script>

<template>
	<button
		class="circle-button h-20 w-20 flex items-center justify-center rounded-full shadow-md"
		:class="[circleBgColor, circleHoverBgColor]"
	>
		<slot />
	</button>
</template>

<style>
.circle-button {
	transition: all 0.2s;
}
.circle-button:hover {
	transform: scale(1.2, 1.2);
}
</style>
