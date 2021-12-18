<script lang="ts">
import { useVModel } from 'vue-composable'

export default defineComponent({
	props: {
		value: String,
		lengthTextColor: String,
	},
	setup(props) {
		const value = useVModel(props, 'value')

		return { value }
	},
})
</script>

<template>
	<div>
		<textarea
			v-model="value"
			autofocus
			cols="50"
			rows="10"
			maxlength="500"
			placeholder="ここに悩みを書く"
			required
			class="w-full h-full break-words border border-black p-4 focus:outline-none"
		></textarea>
		<p class="text-right mr-3" :class="lengthTextColor">
			{{ value.length }} / 500
		</p>
	</div>
</template>
