<script lang="ts">
import { useVModel } from 'vue-composable'

export default defineComponent({
	props: {
		value: String,
	},
	setup(props) {
		const value = useVModel(props, 'value')
		const showPassword = ref(false)

		return { value, showPassword }
	},
})
</script>

<template>
	<div class="flex border rounded border-black">
		<input
			v-model="value"
			class="w-full h-12 px-3 focus:outline-none rounded"
			:type="showPassword ? 'text' : 'password'"
			placeholder="パスワード"
		/>
		<span class="mx-2">
			<button @click="showPassword = !showPassword" class="h-full">
				<FontAwesomeIcon v-if="showPassword" icon="eye" class="w-10 h-10" />
				<FontAwesomeIcon v-else icon="eye-slash" class="w-10 h-10" />
			</button>
		</span>
	</div>
</template>

<style scoped>
input:-webkit-autofill {
	box-shadow: 0 0 0 1000px white inset;
}
</style>
