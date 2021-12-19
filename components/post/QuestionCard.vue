<script setup lang="ts">
import { useRoute } from 'vue-router'

defineProps({
	bgColor: String,
	id: String,
	date: String,
	tags: Object,
})

const beKnown = ref(0)
const neverMind = ref(0)

const post = usePost()
const userId = useUserId()
const postId = useRoute().params.id as string

const increment = (key: string, value: number) => {
	const newValue = (value += 1)
	_updatePostField(postId, key, newValue).then(() => {
		if (key === 'be_known') {
			beKnown.value = newValue
		} else {
			neverMind.value = newValue
		}
	})
}

const updateResolved = (value: boolean) => {
	_updatePostField(postId, 'is_resolved', value).then(() => {
		_getPost(postId)
	})
}

onMounted(() => {
	beKnown.value = post.value.be_known
	neverMind.value = post.value.never_mind
})
</script>

<template>
	<div class="w-full h-fit rounded-2xl p-6 shadow-lg m-0" :class="bgColor">
		<div class="h-2/3 py-3 break-words text-lg text-white flex items-center">
			<span class="w-full h-fit">
				<slot />
			</span>
		</div>
		<div class="text-slate-300 p-3 text-right text-sm">{{ date }}</div>
		<div class="flex justify-between items-center text-xs">
			<div class="flex">
				<div
					class="text-black border border-black font-sans shadow-md flex cursor-pointer bg-amber-200 hover:bg-amber-300 mr-6 rounded-sm"
					@click="increment('be_known', beKnown)"
				>
					<span class="border-r border-black px-3 py-1 text-base">
						わかる！
					</span>
					<span class="text-base px-3 py-1">{{ beKnown }}</span>
				</div>
				<div
					class="text-black border border-black font-sans shadow-md flex cursor-pointer bg-amber-200 hover:bg-amber-300 mr-6 rounded-sm"
					@click="increment('never_mind', neverMind)"
				>
					<span class="border-r border-black px-4 py-1 text-base">
						ドンマイ！
					</span>
					<span class="text-base px-3 py-1">{{ neverMind }}</span>
				</div>
			</div>
			<div class="flex" v-if="userId === post.user_id">
				<!-- <CategoryTag class="mx-1" v-for="tag in tags" :key="tag.id">
					<div>{{ tag.text }}</div>
				</CategoryTag> -->
				<BaseButton v-if="!post.is_resolved" @click="updateResolved(true)">
					<p class="text-base px-3 py-1">解決済みにする</p>
				</BaseButton>
				<BaseButton v-else @click="updateResolved(false)">
					<p class="text-base px-3 py-1">未解決に戻す</p>
				</BaseButton>
			</div>
		</div>
	</div>
</template>
