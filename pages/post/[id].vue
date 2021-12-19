<script setup lang="ts">
import { useRoute } from 'vue-router'
import { CardColor } from '@/types'

const circleBgColor = ['bg-green-400', 'bg-orange-400']
const circleHoverBgColor = ['hover:bg-green-500', 'hover:bg-orange-500']

const showModal = ref(false)
const fullDate = ref('')
const showCard = ref(false)

const post = usePost()

onMounted(async () => {
	await _getPost(useRoute().params.id as string).then(() => {
		const date = post.value.created_at.toDate()
		fullDate.value = `${date.getFullYear()}/${
			date.getMonth() + 1
		}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
		showCard.value = true
	})
})

const cardColor = (): CardColor => {
	switch (post.value.degree) {
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
</script>

<template>
	<div class="m-4">
		<div class="flex items-center justify-center">
			<div class="w-8/12">
				<PostQuestionCard
					v-if="showCard"
					:bgColor="cardColor().background"
					:date="fullDate"
					:tags="null"
				>
					<p :class="cardColor().text">{{ post.text }}</p>
				</PostQuestionCard>
				<div class="flex justify-center items-center flex-col m-10">
					<!-- <PostAnswerCard
						v-for="answer in answers"
						:key="answer.id"
						:text="answer.text"
						:time="answer.time"
						class="m-4"
					/> -->
				</div>
			</div>
		</div>
		<BaseCircleButton
			class="fixed left-13 bottom-10"
			:circleBgColor="circleBgColor[0]"
			:circleHoverBgColor="circleHoverBgColor[0]"
		>
			<nuxt-link to="/">
				<FontAwesomeIcon icon="arrow-left" class="w-10 h-10 text-black mx-2" />
			</nuxt-link>
		</BaseCircleButton>
		<BaseCircleButton
			class="fixed right-10 bottom-10"
			:circleBgColor="circleBgColor[1]"
			:circleHoverBgColor="circleHoverBgColor[1]"
			@click="showModal = true"
		>
			<FontAwesomeIcon
				icon="comment-medical"
				class="w-10 h-10 text-black mx-2"
			/>
		</BaseCircleButton>
		<AnswerModal v-if="showModal" @close-modal="showModal = false" />
	</div>
</template>
