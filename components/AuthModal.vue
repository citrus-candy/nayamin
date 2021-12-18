<script setup lang="ts">
const showSignUpModal = ref(false)
</script>

<template>
	<div class="w-screen h-screen bg-slate-200 flex justify-center items-center">
		<div class="w-96 rounded-xl border border-black bg-white">
			<div v-if="!showSignUpModal">
				<button class="text-left px-2 hover:bg-slate-100 rounded-tl-xl">
					<FontAwesomeIcon icon="times" class="w-10 h-10" />
				</button>
				<hr />
				<div class="p-5 text-center">
					<InputEmail class="mb-4" />
					<InputPassword class="mb-4" />
					<BaseButton>
						<p class="px-10 py-1 text-lg">ログイン</p>
					</BaseButton>
				</div>
				<hr />
				<div class="text-center my-4">
					<button
						class="hover:underline rounded-xl"
						@click="showSignUpModal = true"
					>
						新規登録はこちら
					</button>
				</div>
			</div>
			<div v-else>
				<button
					class="text-left px-2 hover:bg-slate-100 rounded-tl-xl"
					@click="showSignUpModal = false"
				>
					<FontAwesomeIcon icon="arrow-left" class="w-10 h-10" />
				</button>
				<hr />
				<div class="p-5 text-center">
					<InputEmail class="mb-4" />
					<InputPassword class="mb-4" />
					<BaseButton>
						<p class="px-10 py-1 text-lg">新規登録</p>
					</BaseButton>
				</div>
			</div>
		</div>
	</div>
</template>
