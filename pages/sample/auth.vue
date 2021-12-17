<script setup lang="ts">
const email = ref('')
const password = ref('')
const status = ref('')
const errorText = ref('')

const signUp = () => {
	_signUp(email.value, password.value)
		.then((userCredential) => {
			console.log(userCredential)
			status.value = '新規登録に成功しました'
		})
		.catch((error) => {
			errorText.value = error
		})
}
const signIn = () => {
	_signIn(email.value, password.value)
		.then((userCredential) => {
			console.log(userCredential)
			status.value = 'ログインに成功しました'
		})
		.catch((error) => {
			errorText.value = error
		})
}
const signOut = async () => {
	_signOut()
		.then(() => {
			status.value = 'ログアウトに成功しました'
		})
		.catch((error) => {
			errorText.value = error
		})
}
</script>

<template>
	<div>
		<div>
			<input
				v-model="email"
				type="text"
				placeholder="メールアドレス"
				class="border m-4 p-2"
			/>
			<input
				v-model="password"
				type="text"
				placeholder="パスワード"
				class="border m-4 p-2"
			/>
		</div>
		<div>
			<button @click="signUp" class="bg-red-100 m-4 px-4 py-2">新規登録</button>
			<button @click="signIn" class="bg-blue-100 m-4 px-4 py-2">
				ログイン
			</button>
			<button @click="signOut" class="bg-green-100 m-4 px-4 py-2">
				ログアウト
			</button>
		</div>
		<div>
			<p class="m-4 text-blue-500">status: {{ status }}</p>
			<p class="m-4 text-red-500">error: {{ errorText }}</p>
		</div>
	</div>
</template>
