<script lang="ts">
export default defineComponent({
	mounted() {
		_getPost()
	},
	setup() {
		const posts = usePosts()

		const tabState = ref('unresolved')
		const showModal = ref(false)

		const getPost = () => {
			_getPost()
		}

		return {
			posts,
			tabState,
			showModal,
			getPost,
		}
	},
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
					v-for="(post, id) in posts"
					:key="id"
					class="w-full"
					:args="{ post: post }"
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
