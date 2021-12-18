<script setup lang="ts">
const questions = [
	{
		id: '1',
		content: 'houhsadgsakdhasdugh',
		tag: [{ id: '1', text: 'huga' }],
		date: '2021/7/8 12:32',
	},
	{
		id: '2',
		content: 'houhsadgsakdhasdugh',
		tag: [{ id: '1', text: 'huga' }],
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

const rankingIndex = 10

const rankingBgColor = 'bg-indigo-500'
</script>

<template>
	<div>
		<div class="flex border-b border-black h-28 text-2xl">
			<div class="w-2/12 border-r border-black"></div>
			<div class="w-5/12 flex items-center justify-center">
				<p>分かるランキング</p>
			</div>
			<div class="w-5/12 flex items-center justify-center">
				<p>どんまいランキング</p>
			</div>
		</div>
		<div class="flex">
			<div class="w-2/12 border-r border-black">
				<div
					v-for="i in rankingIndex"
					:key="i"
					class="h-44 m-10 flex items-center justify-center text-3xl"
				>
					<p>{{ i }}st</p>
				</div>
			</div>
			<div class="w-5/12">
				<BaseCard
					v-for="question in questions"
					:key="question.id"
					:id="question.id"
					:date="question.date"
					:tags="question.tag"
					:bgColor="rankingBgColor"
					class="m-10"
				>
					{{ question.content }}
				</BaseCard>
			</div>
			<div class="w-5/12">
				<BaseCard
					v-for="question in questions"
					:key="question.id"
					:id="question.id"
					:date="question.date"
					:tags="question.tag"
					:bgColor="rankingBgColor"
					class="m-10"
				>
					{{ question.content }}
				</BaseCard>
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
