<script lang="ts" setup>
defineProps({
	bgColor: String,
	id: String,
	date: String,
	tags: Object,
})
</script>

<template>
	<div class="h-44 rounded-2xl px-4 py-1 shadow-lg" :class="bgColor">
		<nuxt-link :to="`/post/${id}`">
			<div class="h-5/6 py-3 break-words text-ms text-white flex items-center">
				<span class="w-full h-fit overflow-hidden line-clamp-5">
					<slot />
				</span>
			</div>
			<div class="flex justify-between items-center text-xs">
				<div class="text-slate-300 px-3">{{ date }}</div>
				<div class="flex justify-end">
					<CategoryTag class="mx-1" v-for="tag in tags" :key="tag.id">
						{{ tag.text }}
					</CategoryTag>
				</div>
			</div>
		</nuxt-link>
	</div>
</template>
