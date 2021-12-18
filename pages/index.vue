<script setup lang="ts">
const text = ref('')
</script>

<template>
	<div>
		<textarea
			v-model="text"
			autofocus
			cols="50"
			rows="10"
			maxlength="500"
			placeholder="ここに悩みを書く"
			required
			class="w-full h-full break-words border border-black p-4"
		></textarea>
		<p class="text-right mr-3">{{ text.length }} / 500</p>
	</div>
</template>
