<script setup lang="ts">
type MenuBarContents = {
	title: string
	icon: string
	color: string
}

const showBar = ref(false)
const menuBarContents: MenuBarContents[] = [
	{
		title: 'ログイン',
		icon: 'sign-in-alt',
		color: 'text-blue-400',
	},
	{
		title: '悩みを聞いてみる',
		icon: 'comment-dots',
		color: 'text-cyan-400',
	},
	{
		title: '悩みを打ち明ける',
		icon: 'comments',
		color: 'text-amber-400',
	},
	{
		title: 'ランキング',
		icon: 'crown',
		color: 'text-yellow-400',
	},
	{
		title: 'ログアウト',
		icon: 'sign-out-alt',
		color: 'text-red-500',
	},
]
</script>

<template>
	<div>
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
			<div v-for="(content, i) in menuBarContents" :key="i">
				<button class="w-full py-4 px-5 flex items-center hover:bg-slate-100">
					<FontAwesomeIcon
						:icon="content.icon"
						class="w-6 h-6"
						:class="content.color"
					/>
					<p
						class="ml-3"
						:class="{
							[content.color]: i === 0 || i === menuBarContents.length - 1,
						}"
					>
						{{ content.title }}
					</p>
				</button>
				<hr v-if="i === 0 || i === menuBarContents.length - 2" />
			</div>
		</div>
	</div>
</template>
