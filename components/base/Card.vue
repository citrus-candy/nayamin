<script lang="ts" setup>
import { CardColor, Post as InterfacePost } from '@/types'
import { _getCardColor } from '@/composables'

interface Props {
	args: { post: InterfacePost }
}

const post = withDefaults(defineProps<Props>(), {})

const date = post.args.post.created_at.toDate()
const fullDate = `
${date.getFullYear()}/${
	date.getMonth() + 1
}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
`
const cardColor = (): CardColor => {
	switch (post.args.post.degree) {
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
	<div
		class="h-44 rounded-2xl px-4 py-1 shadow-lg"
		:class="cardColor().background"
	>
		<nuxt-link :to="`/post/${post.args.post.post_id}`">
			<div class="h-5/6 py-3 break-words text-ms text-white flex items-center">
				<p
					class="w-full h-fit overflow-hidden line-clamp-5"
					:class="cardColor().text"
				>
					{{ post.args.post.text }}
				</p>
			</div>
			<div class="flex justify-between items-center text-xs">
				<p :class="cardColor().text">{{ fullDate }}</p>
				<div class="flex justify-end">
					<!-- <CategoryTag class="mx-1" v-for="tag in tags" :key="tag.id">
						{{ tag.text }}
					</CategoryTag> -->
				</div>
			</div>
		</nuxt-link>
	</div>
</template>
