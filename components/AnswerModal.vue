<template>
	<div w-full>
		<textarea
			onkeyup="document.getElementById('count').innerText=this.value.length"
			autofocus
			cols="50"
			rows="10"
			maxlength="500"
			required
			class="w-full h-full break-words border border-black p-4 text-3xl"
		></textarea>
		<div class="relative m-3">
			<div></div>
			<BaseButton class="absolute light-0 text-5xl"
				><p class="px-16 py-5">やめる</p></BaseButton
			>
			<button
				class="absolute text-5xl bg-white text-black border border-black font-sans shadow-md rounded hover:bg-gray-100 right-0"
			>
				<p class="px-11 py-5">回答する</p>
			</button>
		</div>
	</div>
</template>
