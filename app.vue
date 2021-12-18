<script setup lang="ts">
import '@/assets/css/tailwind.css'

const marginLeft = ref('63px')
const changeMargin = (value: boolean) => {
	if (value) {
		marginLeft.value = '255px'
	} else {
		marginLeft.value = '63px'
	}
}
</script>

<template>
	<div class="flex">
		<MenuBar @show-menu-bar="changeMargin" />
		<div class="w-full" :style="{ 'margin-left': marginLeft }">
			<NuxtPage />
		</div>
	</div>
</template>
