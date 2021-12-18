<script lang="ts" setup>
defineProps({
	placeholderText: String,
})
</script>

<template>
	<div>
		<textarea
			onkeyup="document.getElementById('count').innerText=this.value.length"
			autofocus
			cols="50"
			rows="10"
			maxlength="500"
			:placeholder="placeholderText"
			required
			class="w-full h-full break-words border border-black p-4"
		></textarea>
		<p class="text-right mr-3"><span id="count"></span>/500</p>
	</div>
</template>
