<script setup lang="ts">
import { FirebaseError } from 'firebase/app'

type Emits = {
	(e: 'closeModal'): void
}

const showSignUpModal = ref(false)
const email = ref('')
const password = ref('')
const successMessage = ref('')
const errorMessage = ref('')

const emit = defineEmits<Emits>()
const signIn = () => {
	errorMessage.value = ''
	_signIn(email.value, password.value)
		.then(() => {
			emit('closeModal')
		})
		.catch((error: FirebaseError) => {
			if (error.code === 'auth/user-not-found') {
				errorMessage.value = 'ユーザーが見つかりません'
			} else if (error.code === 'auth/wrong-password') {
				errorMessage.value = 'パスワードが違います'
			} else {
				errorMessage.value = error.message
			}
		})
}

const signUp = () => {
	successMessage.value = ''
	errorMessage.value = ''
	_signUp(email.value, password.value)
		.then(() => {
			console.log('新規登録に成功しました')
			successMessage.value = '新規登録に成功しました'
		})
		.catch((error) => {
			if (error.code === 'auth/invalid-email') {
				errorMessage.value = 'そのメールアドレスは無効です'
			} else if (error.code === 'auth/invalid-password') {
				errorMessage.value = 'パスワードは6文字以上にしてください'
			} else if (error.code === 'auth/email-already-in-use') {
				errorMessage.value = 'そのメールアドレスはすでに使われています'
			} else {
				errorMessage.value = error.message
			}
		})
}

watch(showSignUpModal, () => {
	successMessage.value = ''
	errorMessage.value = ''
})
</script>

<template>
	<div
		class="w-screen h-screen fixed top-0 bg-slate-200 bg-opacity-50 flex justify-center items-center"
	>
		<div class="w-96 rounded-xl border border-black bg-white">
			<div v-if="!showSignUpModal">
				<button
					class="text-left px-2 hover:bg-slate-100 rounded-tl-xl"
					@click="emit('closeModal')"
				>
					<FontAwesomeIcon icon="times" class="w-10 h-10" />
				</button>
				<hr />
				<div class="p-5 text-center">
					<InputEmail v-model:value="email" class="mb-4" />
					<InputPassword v-model:value="password" class="mb-4" />
					<BaseButton class="mb-4" @click="signIn">
						<p class="px-10 py-1 text-lg">ログイン</p>
					</BaseButton>
					<p class="text-red-500">{{ errorMessage }}</p>
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
					<InputEmail v-model:value="email" class="mb-4" />
					<InputPassword v-model:value="password" class="mb-4" />
					<BaseButton class="mb-4" @click="signUp">
						<p class="px-10 py-1 text-lg">新規登録</p>
					</BaseButton>
					<p class="text-green-500">{{ successMessage }}</p>
					<p class="text-red-500">{{ errorMessage }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
