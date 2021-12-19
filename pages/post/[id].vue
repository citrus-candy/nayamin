<script setup lang="ts">
import { CardColor } from '@/types'

const circleBgColor = ['bg-green-400', 'bg-orange-400']
const circleHoverBgColor = ['hover:bg-green-500', 'hover:bg-orange-500']

const showModal = ref(false)
const showCard = ref(false)

const post = usePost()
const answers = useAnswers()

onMounted(async () => {
	const postId = useRoute().params.id as string
	await _getPost(postId)
	await _getAnswers(postId)
	showCard.value = true
})

const cardColor = (): CardColor => {
	switch (post.value.degree) {
		case '1':
			return {
				negativeColor: 'bg-indigo-50',
				positiveColor: 'bg-orange-50',
				text: 'text-black',
			}
		case '2':
			return {
				negativeColor: 'bg-indigo-100',
				positiveColor: 'bg-orange-100',
				text: 'text-black',
			}
		case '3':
			return {
				negativeColor: 'bg-indigo-200',
				positiveColor: 'bg-orange-200',
				text: 'text-black',
			}
		case '4':
			return {
				negativeColor: 'bg-indigo-300',
				positiveColor: 'bg-orange-300',
				text: 'text-black',
			}
		case '5':
			return {
				negativeColor: 'bg-indigo-400',
				positiveColor: 'bg-orange-400',
				text: 'text-white',
			}
		case '6':
			return {
				negativeColor: 'bg-indigo-500',
				positiveColor: 'bg-orange-500',
				text: 'text-white',
			}
		case '7':
			return {
				negativeColor: 'bg-indigo-600',
				positiveColor: 'bg-orange-600',
				text: 'text-white',
			}
		case '8':
			return {
				negativeColor: 'bg-indigo-700',
				positiveColor: 'bg-orange-700',
				text: 'text-white',
			}
		case '9':
			return {
				negativeColor: 'bg-indigo-800',
				positiveColor: 'bg-orange-800',
				text: 'text-white',
			}
		case '10':
			return {
				negativeColor: 'bg-indigo-900',
				positiveColor: 'bg-orange-900',
				text: 'text-white',
			}
	}
}
</script>

<template>
	<div class="m-4">
		<div class="flex items-center justify-center">
			<div v-if="showCard" class="w-8/12">
				<PostQuestionCard
					:bgColor="
						post.is_resolved
							? cardColor().positiveColor
							: cardColor().negativeColor
					"
					:date="post.created_at.toDate().toString()"
					:tags="null"
				>
					<p :class="cardColor().text">{{ post.text }}</p>
				</PostQuestionCard>
				<div class="flex justify-center items-center flex-col m-10">
					<PostAnswerCard
						v-for="(answer, i) in answers"
						:key="i"
						:text="answer.text"
						:time="answer.created_at.toDate().toString()"
						class="m-4"
					/>
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
