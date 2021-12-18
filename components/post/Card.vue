<template>
	<div class="h-full border rounded-2xl bg-indigo-500">
		<div class="w-full h-full p-6">
			<InputTextArea />
			<div class="my-3 text-white text-2xl">悩み度</div>
			<div class="flex justify-between items-center">
				<div class="h-full w-3/4 mb-2">
					<BaseSlider class="w-full" />
				</div>
				<div
					class="flex border border-gray-600 rounded p-2 w-32 justify-center items-center bg-orange-300 cursor-pointer"
				>
					<FontAwesomeIcon icon="tag" class="w-4 h-4 text-gray-700 mr-2" />
					<span>タグ</span>
				</div>
			</div>
		</div>
	</div>
</template>
