<script setup lang="ts">
type Props = {
	tagNames: Object
	type: string
}

withDefaults(defineProps<Props>(), {
	tagNames: null,
	type: null,
})

const isSelected = ref('')
const clicked = (id: string) => {
	if (isSelected.value === id) {
		isSelected.value = ''
	} else {
		isSelected.value = id
	}
}
</script>

<template>
	<div
		class="absolute right-10 border border-gray-200 w-[400px] p-2 bg-white shadow-xl"
		:class="{ 'top-30': type === 'search', 'bottom-0': type === 'add' }"
	>
		<div v-if="type === 'add'" class="flex justify-center">
			<FontAwesomeIcon
				icon="chevron-down"
				class="w-10 h-10 text-gray-500 hover:text-black mx-2 cursor-pointer"
			/>
		</div>
		<div class="flex content-start flex-wrap p-4">
			<CategoryTag
				v-for="tagName in tagNames"
				:key="tagName.id"
				@click="clicked(tagName.id)"
				class="mx-2 my-1 cursor-pointer hover:bg-green-400"
				:class="{ 'bg-green-400': isSelected === tagName.id }"
			>
				{{ tagName.name }}
			</CategoryTag>
		</div>
		<div v-if="type === 'search'" class="flex justify-center">
			<FontAwesomeIcon
				icon="chevron-up"
				class="w-10 h-10 text-gray-500 hover:text-black mx-2 cursor-pointer"
			/>
		</div>
	</div>
</template>
