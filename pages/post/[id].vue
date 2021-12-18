<script setup lang="ts">
const bgColor = 'bg-gray-400'
const question = {
	content: '腰が痛いです',
	date: '2021/12/12 12:12',
}
const tags = [
	{ id: '1', text: 'hoge' },
	{ id: '2', text: 'hoge' },
	{ id: '3', text: 'hoge' },
]
const answers = [
	{ id: '1', text: 'hoge', time: '2021/12/12 12:12' },
	{ id: '2', text: 'hoge', time: '2021/12/12 12:12' },
	{ id: '3', text: 'hoge', time: '2021/12/12 12:12' },
	{ id: '4', text: 'hoge', time: '2021/12/12 12:12' },
	{ id: '5', text: 'hoge', time: '2021/12/12 12:12' },
	{ id: '6', text: 'hoge', time: '2021/12/12 12:12' },
]
const circleBgColor = ['bg-green-400', 'bg-orange-400']
const circleHoverBgColor = ['hover:bg-green-500', 'hover:bg-orange-500']
const showModal = ref(false)
</script>

<template>
	<div class="m-4">
		<div class="flex items-center justify-center">
			<div class="w-8/12">
				<PostQuestionCard :bgColor="bgColor" :date="question.date" :tags="tags">
					{{ question.content }}
				</PostQuestionCard>
				<div class="flex justify-center items-center flex-col m-10">
					<PostAnswerCard
						v-for="answer in answers"
						:key="answer.id"
						:text="answer.text"
						:time="answer.time"
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
