<template>
	<div w-full>
		<InputTextArea :placeholderText="''"></InputTextArea>
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
