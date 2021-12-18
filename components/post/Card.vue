<template>
	<div class="w-full h-full p-6 border rounded-2xl bg-indigo-500">
		<InputTextArea :placeholderText="'ここに悩みを書く'" />
		<div class="mb-3 text-white text-2xl">悩み度</div>
		<div class="flex justify-between items-center">
			<BaseSlider class="h-full w-3/4" />
			<BaseButton>
				<div class="px-8 py-2">
					<FontAwesomeIcon icon="tag" class="w-4 h-4 text-gray-700 mr-2" />
					<span>タグ</span>
				</div>
			</BaseButton>
		</div>
	</div>
</template>
