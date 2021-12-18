<script setup lang="ts">
import '@/assets/css/tailwind.css'

const loading = ref(true)
const marginLeft = ref('63px')
const changeMargin = (value: boolean) => {
	if (value) {
		marginLeft.value = '255px'
	} else {
		marginLeft.value = '63px'
	}
}
onMounted(() => {
	_onAuthStateChanged()
	setTimeout(() => {
		loading.value = false
	}, 1000)
})
</script>

<template>
	<div class="flex">
		<MenuBar @show-menu-bar="changeMargin" />
		<div class="w-full" :style="{ 'margin-left': marginLeft }">
			<NuxtPage />
		</div>
	</div>
	<transition>
		<div
			v-if="loading"
			class="absolute top-0 w-screen h-screen bg-white flex justify-center items-center"
		>
			<p class="text-xl text-amber-400">Now Loading...</p>
		</div>
	</transition>
</template>

<style scoped>
.v-leave-active {
	transition: opacity 1s;
}
.v-leave-to {
	opacity: 0;
}
</style>
