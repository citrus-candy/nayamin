<script lang="ts">
import { useVModel } from 'vue-composable'

export default defineComponent({
	props: {
		value: String,
		textColor: String,
	},
	setup(props) {
		const value = useVModel(props, 'value')

		return { value }
	},
})
</script>

<template>
	<div class="flex items-center">
		<span class="text-xl mr-3" :class="textColor">1</span>
		<input
			v-model="value"
			type="range"
			min="1"
			max="10"
			step="1"
			class="w-full cursor-pointer appearance-none bg-black h-px slider"
		/>
		<span class="text-xl ml-3" :class="textColor">10</span>
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
	background-color: #0500ff;
	border-radius: 50%;
	-webkit-border-radius: 50%;
}
</style>
