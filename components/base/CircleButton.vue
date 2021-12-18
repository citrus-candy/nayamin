<script lang="ts" setup>
defineProps({
	circleBgColor: String,
	circleHoverBgColor: String,
})
</script>

<template>
	<div class="circle-button">
		<button
			class="h-24 w-24 flex items-center justify-center rounded-full shadow-md"
			:class="[circleBgColor, circleHoverBgColor]"
		>
			<slot />
		</button>
	</div>
</template>
