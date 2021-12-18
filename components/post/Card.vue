<script setup lang="ts">
import { CardColor } from '@/types'
import { _getCardColor } from '@/composables'

const text = ref('')
const degree = ref('5')
const bgColor = ref('bg-indigo-500')
const textColor = ref('text-white')
const successPost = ref(false)

const addPost = () => {
	_addPost(text.value, degree.value).then(() => {
		successPost.value = true
	})
}

watch(degree, (degree) => {
	const cardColor = (): CardColor => {
		switch (degree) {
			case '1':
				return {
					background: 'bg-indigo-50',
					text: 'text-black',
				}
			case '2':
				return {
					background: 'bg-indigo-100',
					text: 'text-black',
				}
			case '3':
				return {
					background: 'bg-indigo-200',
					text: 'text-black',
				}
			case '4':
				return {
					background: 'bg-indigo-300',
					text: 'text-black',
				}
			case '5':
				return {
					background: 'bg-indigo-400',
					text: 'text-white',
				}
			case '6':
				return {
					background: 'bg-indigo-500',
					text: 'text-white',
				}
			case '7':
				return {
					background: 'bg-indigo-600',
					text: 'text-white',
				}
			case '8':
				return {
					background: 'bg-indigo-700',
					text: 'text-white',
				}
			case '9':
				return {
					background: 'bg-indigo-800',
					text: 'text-white',
				}
			case '10':
				return {
					background: 'bg-indigo-900',
					text: 'text-white',
				}
		}
	}
	bgColor.value = cardColor().background
	textColor.value = cardColor().text
})
</script>

<template>
	<div>
		<div class="w-full h-full p-6 border rounded-2xl" :class="bgColor">
			<InputTextArea
				v-model:value="text"
				:length-text-color="textColor"
				:placeholder-text="'ここに悩みを書く'"
			/>
			<div class="mb-3 text-2xl" :class="textColor">悩み度 {{ degree }}</div>
			<div class="flex justify-between items-center">
				<InputSlider
					v-model:value="degree"
					class="h-full w-3/4"
					:text-color="textColor"
				/>
				<BaseButton>
					<div class="px-8 py-2">
						<FontAwesomeIcon icon="tag" class="w-4 h-4 text-gray-700 mr-2" />
						<span>タグ</span>
					</div>
				</BaseButton>
			</div>
		</div>
		<div class="text-center mt-12">
			<BaseButton
				v-if="!successPost"
				class="text-4xl py-4 px-8"
				@click="addPost"
			>
				相談する
			</BaseButton>
			<p v-else class="text-xl text-green-500">お悩みを投稿しました</p>
		</div>
	</div>
</template>
