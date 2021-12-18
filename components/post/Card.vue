<script setup lang="ts">
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

watch(degree, (value) => {
	// ここはcomposablesにする
	switch (value) {
		case '1': {
			bgColor.value = 'bg-indigo-50'
			textColor.value = 'text-black'
			break
		}
		case '2': {
			bgColor.value = 'bg-indigo-100'
			textColor.value = 'text-black'
			break
		}
		case '3': {
			bgColor.value = 'bg-indigo-200'
			textColor.value = 'text-black'
			break
		}
		case '4': {
			bgColor.value = 'bg-indigo-300'
			textColor.value = 'text-black'
			break
		}
		case '5': {
			bgColor.value = 'bg-indigo-400'
			textColor.value = 'text-white'
			break
		}
		case '6': {
			bgColor.value = 'bg-indigo-500'
			textColor.value = 'text-white'
			break
		}
		case '7': {
			bgColor.value = 'bg-indigo-600'
			textColor.value = 'text-white'
			break
		}
		case '8': {
			bgColor.value = 'bg-indigo-700'
			textColor.value = 'text-white'
			break
		}
		case '9': {
			bgColor.value = 'bg-indigo-800'
			textColor.value = 'text-white'
			break
		}
		case '10': {
			bgColor.value = 'bg-indigo-900'
			textColor.value = 'text-white'
			break
		}
	}
})
</script>

<template>
	<div>
		<div class="w-full h-full p-6 border rounded-2xl" :class="bgColor">
			<InputTextArea 
        v-model:value="text" 
        :length-text-color="textColor" 
        :placeholderText="'ここに悩みを書く'" 
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