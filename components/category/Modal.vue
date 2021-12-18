<script setup lang="ts">
type Props = {
	tags: Object
	type: string
}

type Emits = {
	(e: 'modalClose'): void
	(e: 'selectedTag', value: string): void
}

withDefaults(defineProps<Props>(), {
	tags: null,
	type: null,
})
const emit = defineEmits<Emits>()

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
		class="absolute right-10 border border-gray-200 w-[400px] p-2 bg-white shadow-xl shadow-gray-600"
		:class="{ 'top-20': type === 'search', 'bottom-0': type === 'add' }"
	>
		<div
			v-if="type === 'add'"
			class="flex justify-center"
			@click="emit('modalClose')"
		>
			<FontAwesomeIcon
				icon="chevron-down"
				class="w-10 h-10 text-gray-500 hover:text-black mx-2 cursor-pointer"
			/>
		</div>
		<div class="flex content-start flex-wrap p-4">
			<CategoryTag
				v-for="tag in tags"
				:key="tag.id"
				@click="clicked(tag.id)"
				class="mx-2 my-1 cursor-pointer hover:bg-green-400"
				:class="{ 'bg-green-400': isSelected === tag.id }"
			>
				{{ tag.name }}
			</CategoryTag>
		</div>
		<div
			v-if="type === 'search'"
			class="flex justify-center"
			@click="emit('modalClose')"
		>
			<FontAwesomeIcon
				icon="chevron-up"
				class="w-10 h-10 text-gray-500 hover:text-black mx-2 cursor-pointer"
			/>
		</div>
	</div>
</template>
