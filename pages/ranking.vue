<script setup lang="ts">
import { _getPostRankings } from '~~/composables/firestore'

const beKnownRanking = useBeKnownRanking()
const neverMindRanking = useNeverMindRanking()
const showRanking = ref(false)

onMounted(() => {
	showRanking.value = false
	_getPostRankings().then(() => {
		showRanking.value = true
	})
})
</script>

<template>
	<table class="w-full h-screen border-collapse text-center" v-if="showRanking">
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
				<td class="border px-10">
					<BaseCard :args="{ post: beKnownRanking[0] }" />
				</td>
				<td class="border px-10">
					<BaseCard :args="{ post: neverMindRanking[0] }" />
				</td>
			</tr>
			<tr>
				<td class="text-3xl border">2nd</td>
				<td class="border px-10">
					<BaseCard :args="{ post: beKnownRanking[1] }" />
				</td>
				<td class="border px-10">
					<BaseCard :args="{ post: neverMindRanking[1] }" />
				</td>
			</tr>
			<tr>
				<td class="text-3xl border">3rd</td>
				<td class="border px-10">
					<BaseCard :args="{ post: beKnownRanking[2] }" />
				</td>
				<td class="border px-10">
					<BaseCard :args="{ post: neverMindRanking[2] }" />
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
