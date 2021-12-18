<script setup lang="ts">
type Emits = {
	(e: 'closeModal'): void
}

const text = ref('')
const emit = defineEmits<Emits>()
</script>

<template>
	<div
		class="fixed bottom-[-2px] right-5 shadow-xl w-3/5 m-auto p-10 border border-black rounded bg-white z-10"
	>
		<InputTextArea
			v-model:value="text"
			placeholderText="悩みに回答する"
			class="h-40"
		/>
		<div class="flex justify-between mt-10">
			<BaseButton class="text-3xl" @click="emit('closeModal')">
				<p class="px-4 py-1">やめる</p>
			</BaseButton>
			<BaseButton class="text-3xl">
				<p class="px-4 py-1">回答する</p>
			</BaseButton>
		</div>
	</div>
</template>
