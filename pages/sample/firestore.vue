<script setup lang="ts">
const collectionName: string = 'sample'

const status = ref('')
const name = ref('')
const errorText = ref('')

const id = useId()
const sample = useSample()

const add = async () => {
	await _addSampleName(collectionName, name.value)
		.then(() => {
			status.value = '名前を追加しました'
			_getSampleName(collectionName)
		})
		.catch((error) => {
			errorText.value = error
		})
}
const update = async () => {
	await _updateSampleName(collectionName, name.value)
		.then(() => {
			status.value = '名前を更新しました'
			_getSampleName(collectionName)
		})
		.catch((error) => {
			errorText.value = error
		})
}
const remove = async () => {
	await _removeSampleName(collectionName)
		.then(() => {
			status.value = '名前を削除しました'
			sample.value = {
				name: '',
				created_at: null,
				updated_at: null,
			}
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
				v-model="name"
				type="text"
				placeholder="名前"
				class="border m-4 p-2"
			/>
		</div>
		<div>
			<button @click="add" class="bg-red-100 hover:bg-red-200 m-4 px-4 py-2">
				追加
			</button>
			<button
				@click="update"
				class="bg-blue-100 hover:bg-blue-200 m-4 px-4 py-2"
			>
				更新
			</button>
			<button
				@click="remove"
				class="bg-green-100 hover:bg-green-200 m-4 px-4 py-2"
			>
				削除
			</button>
		</div>
		<div>
			<p class="m-4 text-blue-500">status: {{ status }}</p>
			<p class="m-4 text-blue-500">id: {{ id }}</p>
			<p class="m-4 text-red-500">error: {{ errorText }}</p>
		</div>
		<table class="m-4 border-collapse border border-gray-400 text-left">
			<thead>
				<tr>
					<th class="border border-gray-300 p-2">name</th>
					<th class="border border-gray-300 p-2">created_at</th>
					<th class="border border-gray-300 p-2">updated_at</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td class="border border-gray-300 p-2">{{ sample.name }}</td>
					<td
						v-if="sample.created_at !== null"
						class="border border-gray-300 p-2"
					>
						{{ sample.created_at }}
					</td>
					<td
						v-if="sample.updated_at !== null"
						class="border border-gray-300 p-2"
					>
						{{ sample.updated_at }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
