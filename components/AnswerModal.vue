<script setup lang="ts">
import { _addAnswer } from '~~/composables/firestore'
import { useRoute } from 'vue-router'

type Emits = {
	(e: 'closeModal'): void
}

const text = ref('')
const emit = defineEmits<Emits>()
const id = useRoute().params.id as string

const addAnswer = () => {
	_addAnswer(text.value, id).then(async () => {
		await _getAnswers(id)
		emit('closeModal')
		text.value = ''
	})
}
</script>

<template>
	<div
		class="answer-modal fixed bottom-[-2px] right-5 shadow-gray-500 shadow-2xl w-3/5 m-auto p-10 border border-black rounded bg-white z-10"
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
			<BaseButton class="text-3xl" @click="addAnswer">
				<p class="px-4 py-1">回答する</p>
			</BaseButton>
		</div>
	</div>
</template>

<style>
.answer-modal {
	animation: SlideIn 0.5s;
}
@keyframes SlideIn {
	0% {
		opacity: 0;
		transform: translateY(64px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
