<script setup lang="ts">
const authState = useAuthState()
</script>

<template>
	<div class="flex justify-center items-center h-screen flex-col px-20">
		<div v-if="authState" class="w-full max-w-5xl">
			<PostCard />
		</div>
		<p v-if="!authState" class="text-xl">
			この機能を利用するにはログインが必要です
		</p>
	</div>
</template>
