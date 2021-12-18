<script lang="ts">
export default defineComponent({
	setup() {
		const count1 = ref(0)
		const count2 = ref(0)

		return {
			count1,
			count2,
		}
	},

	props: {
		bgColor: {
			type: String,
		},
		id: {
			type: String,
		},
		date: {
			type: String,
		},
		tags: {
			type: Object,
		},
	},
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
					@click="count1++"
				>
					<span class="border-r border-black px-3 py-1 text-base"
						>わかる！</span
					>
					<span class="text-base px-3 py-1">{{ count1 }}</span>
				</div>
				<div
					class="text-black border border-black font-sans shadow-md flex cursor-pointer bg-amber-200 hover:bg-amber-300 mr-6 rounded-sm"
					@click="count2++"
				>
					<span class="border-r border-black px-4 py-1 text-base"
						>ドンマイ！</span
					>
					<span class="text-base px-3 py-1">{{ count2 }}</span>
				</div>
			</div>

			<div class="flex">
				<CategoryTag class="mx-1" v-for="tag in tags" :key="tag.id">
					<div>{{ tag.text }}</div>
				</CategoryTag>
			</div>
		</div>
	</div>
</template>
