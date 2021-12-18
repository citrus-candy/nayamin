<script lang="ts">
import { useVModel } from 'vue-composable'

export default defineComponent({
	props: {
		value: String,
	},
	setup(props) {
		const value = useVModel(props, 'value')

		return { value }
	},
})
</script>

<template>
	<input
		v-model="value"
		class="border rounded border-black w-full h-12 px-3"
		type="password"
		placeholder="パスワード"
	/>
</template>
