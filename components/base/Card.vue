<script lang="ts" setup>
import { CardColor, Post as InterfacePost } from '@/types'
import { _getCardColor } from '@/composables'

interface Props {
	args: { post: InterfacePost }
	isPositive?: Boolean
}

const post = withDefaults(defineProps<Props>(), {})

const route = useRoute().path
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
	<div
		v-if="
			!(
				(post.isPositive && post.args.post.is_resolved) ||
				(!post.isPositive && !post.args.post.is_resolved)
			) || route !== '/'
		"
		class="base-card h-44 rounded-2xl px-4 py-1 shadow-lg"
		:class="
			post.args.post.is_resolved
				? cardColor().positiveColor
				: cardColor().negativeColor
		"
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

<style lang="css">
.base-card {
	transition: all 0.2s;
}
.base-card:hover {
	transform: scale(1.1, 1.1);
}
</style>
