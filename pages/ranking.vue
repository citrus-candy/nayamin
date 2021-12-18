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
	<table class="border-collapse text-center">
		<thead>
			<tr>
				<td class="border w-1/5 h-14 bg-amber-50"></td>
				<td class="text-2xl border w-2/5 bg-amber-50">わかるランキング</td>
				<td class="text-2xl border w-2/5 bg-amber-50">どんまいランキング</td>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td class="text-3xl border">1st</td>
				<td class="border">
					<BaseCard
						class="m-auto"
						:key="questions[0].id"
						:id="questions[0].id"
						:date="questions[0].date"
						:tags="questions[0].tag"
						:bgColor="rankingBgColor"
					/>
				</td>
				<td class="border">
					<BaseCard
						class="m-auto"
						:key="questions[0].id"
						:id="questions[0].id"
						:date="questions[0].date"
						:tags="questions[0].tag"
						:bgColor="rankingBgColor"
					/>
				</td>
			</tr>
			<tr>
				<td class="text-3xl border">2nd</td>
				<td class="border">
					<BaseCard
						class="m-auto"
						:key="questions[0].id"
						:id="questions[0].id"
						:date="questions[0].date"
						:tags="questions[0].tag"
						:bgColor="rankingBgColor"
					/>
				</td>
				<td class="border">
					<BaseCard
						class="m-auto"
						:key="questions[0].id"
						:id="questions[0].id"
						:date="questions[0].date"
						:tags="questions[0].tag"
						:bgColor="rankingBgColor"
					/>
				</td>
			</tr>
			<tr>
				<td class="text-3xl border">3rd</td>
				<td class="border">
					<BaseCard
						class="m-auto"
						:key="questions[0].id"
						:id="questions[0].id"
						:date="questions[0].date"
						:tags="questions[0].tag"
						:bgColor="rankingBgColor"
					/>
				</td>
				<td class="border">
					<BaseCard
						class="m-auto"
						:key="questions[0].id"
						:id="questions[0].id"
						:date="questions[0].date"
						:tags="questions[0].tag"
						:bgColor="rankingBgColor"
					/>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<style scoped>
.list {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	row-gap: 20px;
	column-gap: 30px;
}
</style>
