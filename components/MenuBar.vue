<script setup lang="ts">
type MenuBarContents = {
	title: string
	icon: string
	color: string
	to: string
}
type Emits = {
	(e: 'showMenuBar', value: boolean): void
}

const authState = useAuthState()
const emit = defineEmits<Emits>()

const showBar = ref(false)
const showAuthModal = ref(false)
const selectedIndex = ref(0)

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
	{
		title: '自分の投稿',
		icon: 'user',
		color: 'text-rose-400',
		to: 'mypost',
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

watch(showBar, (value) => {
	emit('showMenuBar', value)
})
</script>

<template>
	<div class="bg-white fixed">
		<div v-if="!showBar" class="w-16 border-r border-black h-screen">
			<button class="w-full py-1 hover:bg-slate-100" @click="showBar = true">
				<FontAwesomeIcon icon="bars" class="w-10 h-10" />
			</button>
			<hr />
			<nuxt-link
				v-for="(content, i) in menuBarContents"
				:key="i"
				:to="content.to"
			>
				<button
					class="w-full hover:bg-slate-100 py-2"
					@click="selectedIndex = i"
				>
					<FontAwesomeIcon
						:icon="content.icon"
						class="w-9 h-9"
						:class="{ [content.color]: i === selectedIndex }"
					/>
				</button>
			</nuxt-link>
			<hr />
			<button
				v-if="!authState"
				class="w-full py-1 hover:bg-slate-100"
				@click="showAuthModal = true"
			>
				<FontAwesomeIcon icon="sign-in-alt" class="w-9 h-9 text-blue-400" />
			</button>
			<button v-else class="w-full py-1 hover:bg-slate-100" @click="signOut">
				<FontAwesomeIcon icon="sign-out-alt" class="w-9 h-9 text-red-500" />
			</button>
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
				@click="
					() => {
						showBar = false
						selectedIndex = i
					}
				"
			>
				<FontAwesomeIcon
					:icon="content.icon"
					class="w-6 h-6"
					:class="{ [content.color]: i === selectedIndex }"
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
