<script setup lang="ts">
import { useAuthState } from '~~/composables/auth'

type MenuBarContents = {
	title: string
	icon: string
	color: string
	to: string
}

const authState = useAuthState()

const showBar = ref(false)
const showAuthModal = ref(false)
const menuBarContents: MenuBarContents[] = [
	{
		title: '悩みを聞いてみる',
		icon: 'comment-dots',
		color: 'text-cyan-400',
		to: '/',
	},
	{
		title: '悩みを打ち明ける',
		icon: 'comments',
		color: 'text-amber-400',
		to: '/post',
	},
	{
		title: 'ランキング',
		icon: 'crown',
		color: 'text-yellow-400',
		to: 'ranking',
	},
]
const signOut = () => {
	_signOut()
		.then(() => {
			console.log('ログアウトに成功しました')
		})
		.catch((error) => {
			console.log(error)
		})
}
</script>

<template>
	<div class="bg-white">
		<div v-if="!showBar" class="w-16 border-r border-black h-screen">
			<button class="w-full py-1 hover:bg-slate-100" @click="showBar = true">
				<FontAwesomeIcon icon="bars" class="w-10 h-10" />
			</button>
			<hr />
		</div>
		<div v-show="showBar" class="w-64 border-r border-black h-screen">
			<div class="flex justify-end">
				<hr />
				<button class="px-2 py-1 hover:bg-slate-100" @click="showBar = false">
					<FontAwesomeIcon icon="arrow-left" class="w-10 h-10" />
				</button>
			</div>
			<hr />
			<nuxt-link
				v-for="(content, i) in menuBarContents"
				:key="i"
				class="w-full py-4 px-5 flex items-center hover:bg-slate-100"
				:to="content.to"
				@click="showBar = false"
			>
				<FontAwesomeIcon
					:icon="content.icon"
					class="w-6 h-6"
					:class="content.color"
				/>
				<p class="ml-3">
					{{ content.title }}
				</p>
			</nuxt-link>
			<hr />
			<button
				v-if="!authState"
				class="w-full py-4 px-5 flex items-center hover:bg-slate-100"
				@click="showAuthModal = true"
			>
				<FontAwesomeIcon icon="sign-in-alt" class="w-6 h-6 text-blue-400" />
				<p class="ml-3 text-blue-400">ログイン</p>
			</button>
			<button
				v-else
				class="w-full py-4 px-5 flex items-center hover:bg-slate-100"
				@click="signOut"
			>
				<FontAwesomeIcon icon="sign-out-alt" class="w-6 h-6 text-red-500" />
				<p class="ml-3 text-red-500">ログアウト</p>
			</button>
		</div>
		<AuthModal v-if="showAuthModal" @close-modal="showAuthModal = false" />
	</div>
</template>
