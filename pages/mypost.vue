<script setup lang="ts">
import { _getMyPost } from '~~/composables/firestore'

const myPosts = useMyPosts()
const userId = useUserId()

onMounted(() => {
	_getMyPost(userId.value)
})
</script>

<template>
	<div>
		<div class="border-b border-black h-16 flex items-center justify-center">
			<p class="text-2xl">自分の投稿</p>
		</div>
		<div>
			<div class="list mx-60 my-24">
				<BaseCard
					v-for="(myPost, id) in myPosts"
					:key="id"
					class="w-full"
					:args="{ post: myPost }"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped>
.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	row-gap: 20px;
	column-gap: 30px;
}
</style>
