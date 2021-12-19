<script setup lang="ts">
const posts = usePosts()

const tabState = ref('unresolved')

const getPosts = () => {
	_getPosts()
}

onMounted(() => {
	_getPosts()
})
</script>

<template>
	<div>
		<div class="flex h-16 border-b border-black justify-between items-center">
			<div class="flex h-full">
				<button
					class="w-fit h-full border border-black px-7 text-xl flex items-center bg-blue-200 hover:bg-blue-500"
					:class="{ 'bg-blue-500': tabState === 'unresolved' }"
					@click="tabState = 'unresolved'"
				>
					<span>未解決</span>
				</button>
				<button
					class="w-fit h-full border border-black px-7 text-xl flex items-center bg-orange-200 hover:bg-orange-500"
					:class="{ 'bg-orange-500': tabState === 'resolved' }"
					@click="tabState = 'resolved'"
				>
					<p>解決済み</p>
				</button>
			</div>
			<div class="flex">
				<div class="border border-black rounded mr-7">
					<button @click="showModal = true" class="flex h-full items-stretch">
						<div class="border-r border-black flex items-center">
							<FontAwesomeIcon
								icon="search"
								class="w-5 h-5 text-gray-500 mx-2"
							/>
						</div>
						<div class="flex items-center px-3">
							<span>カテゴリで絞り込む</span>
						</div>
					</button>
					<!-- <CategoryModal
						v-if="showModal"
						:type="'search'"
						:tags="tabState"
						@modalClose="showModal = false"
					/> -->
				</div>
				<button
					class="flex items-center border border-black rounded h-10 w-10 mr-7"
					@click="getPosts"
				>
					<FontAwesomeIcon icon="sync" class="w-5 h-5 text-gray-500 mx-2" />
				</button>
			</div>
		</div>
		<div v-if="tabState === 'unresolved'" class="list mx-60 my-24">
			<BaseCard v-for="post in posts" class="w-full" :args="{ post: post }" />
		</div>
		<div v-if="tabState === 'resolved'" class="list mx-60 my-24">
			<BaseCard v-for="post in posts" class="w-full" :args="{ post: post }" />
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
