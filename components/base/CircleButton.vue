<script lang="ts" setup>
defineProps({
	circleBgColor: String,
	circleHoverBgColor: String,
})
</script>

<template>
	<button
		class="h-20 w-20 flex items-center justify-center rounded-full shadow-md"
		:class="[circleBgColor, circleHoverBgColor]"
	>
		<slot />
	</button>
</template>
