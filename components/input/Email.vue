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
		type="email"
		pattern="^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$"
		size="30"
		autocomplete="on"
		required
		placeholder="メールアドレス"
		class="border rounded border-black w-full h-12 px-3"
	/>
</template>
