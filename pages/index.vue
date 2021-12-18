<script setup lang="ts">
const tags = [
	{ id: '1', name: 'huga' },
	{ id: '2', name: 'huga' },
	{ id: '3', name: 'huga' },
	{ id: '4', name: 'huga' },
	{ id: '5', name: 'huga' },
	{ id: '6', name: 'huga' },
	{ id: '7', name: 'huga' },
	{ id: '8', name: 'huga' },
	{ id: '9', name: 'huga' },
	{ id: '10', name: 'huga' },
]
const tests = [
	{
		id: '1',
		content: 'houhsadgsakdhasdugh',
		tag: [{ id: '1', text: 'huga' }],
		date: '2021/7/8 12:32',
	},
	{
		id: '2',
		content: 'houhsadgsakdhasdugh',
		tag: { id: '2', text: 'huga' },
		date: '2021/7/8 12:32',
	},
	{
		id: '3',
		content:
			'houhsadgsakdhasdughsdajkfhajkhkdjbkvkjshfuiausdjaufviujddddddddddddjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjhggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjdhvuhawsvhuihaksdkfhaosfhuaowesdkjhfnjsakdhfnjk',
		tag: { id: '3', text: 'hugas' },
		date: '2021/7/8 12:32',
	},
	{
		id: '4',
		content: 'houhsadgsakdhasdugh',
		tag: { id: '4', text: 'huga' },
		date: '2021/7/8 12:32',
	},
	{
		id: '5',
		content: 'houhsadgsakdhasdugh',
		tag: { id: '5', text: 'huga' },
		date: '2021/7/8 12:32',
	},
	{
		id: '6',
		content: 'houhsadgsakdhasdugh',
		tag: { id: '6', text: 'huga' },
		date: '2021/7/8 12:32',
	},
	{
		id: '7',
		content: 'houhsadgsakdhasdugh',
		tag: { id: '7', text: 'huga' },
		date: '2021/7/8 12:32',
	},
]

const bgColor = 'bg-indigo-500'
const bgColor1 = 'bg-orange-500'

const isTab = ref('unresolved')
const showModal = ref(false)
</script>

<template>
	<div>
		<div class="flex h-16 border-b border-black justify-between items-center">
			<div class="flex h-full">
				<div
					class="w-fit h-full border border-black px-7 text-xl flex items-center cursor-pointer bg-blue-200 hover:bg-blue-500"
					:class="{ 'bg-blue-500': isTab === 'unresolved' }"
					@click="isTab = 'unresolved'"
				>
					<span>未解決</span>
				</div>
				<div
					class="w-fit h-full border border-black px-7 text-xl flex items-center cursor-pointer bg-orange-200 hover:bg-orange-500"
					:class="{ 'bg-orange-500': isTab === 'resolved' }"
					@click="isTab = 'resolved'"
				>
					<p>解決済み</p>
				</div>
			</div>
			<div class="flex">
				<div class="border border-black rounded mr-7">
					<div @click="showModal = true" class="flex h-full cursor-pointer">
						<div class="border-r border-black flex items-center">
							<FontAwesomeIcon
								icon="search"
								class="w-5 h-5 text-gray-500 mx-2"
							/>
						</div>
						<div class="flex items-center px-3">
							<span>カテゴリで絞り込む</span>
						</div>
					</div>
					<CategoryModal
						v-if="showModal"
						:type="'search'"
						:tags="tags"
						@modalClose="showModal = false"
					/>
				</div>
				<div
					class="flex items-center border border-black rounded h-10 w-10 mr-7 cursor-pointer"
				>
					<FontAwesomeIcon icon="sync" class="w-5 h-5 text-gray-500 mx-2" />
				</div>
			</div>
		</div>
		<div v-if="isTab === 'unresolved'" class="list mx-60 my-24">
			<BaseCard
				v-for="test in tests"
				:key="test.id"
				:id="test.id"
				:date="test.date"
				:tags="test.tag"
				:bgColor="bgColor"
				class="w-full"
			>
				{{ test.content }}
			</BaseCard>
		</div>
		<div v-if="isTab === 'resolved'" class="list mx-60 my-24">
			<BaseCard
				v-for="test in tests"
				:key="test.id"
				:id="test.id"
				:date="test.date"
				:tags="test.tag"
				:bgColor="bgColor1"
				class="w-full"
			>
				{{ test.content }}
			</BaseCard>
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
