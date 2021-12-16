<script setup lang="ts">
import {
	getFirestore,
	collection,
	doc,
	addDoc,
	updateDoc,
	deleteDoc,
	getDoc,
	serverTimestamp,
	Timestamp,
} from 'firebase/firestore'

type Sample = {
	name: string
	created_at: Timestamp
	updated_at: Timestamp
}

const collectionName: string = 'sample'

const status = ref('')
const name = ref('')
const id = ref('')
const errorText = ref('')
const data = ref<Sample>({
	name: '',
	created_at: null,
	updated_at: null,
})

const add = async () => {
	const db = getFirestore()
	const collectionRef = collection(db, collectionName)
	await addDoc(collectionRef, {
		name: name.value,
		created_at: serverTimestamp(),
	})
		.then((doc) => {
			status.value = '名前を追加しました'
			id.value = doc.id
			name.value = ''
			getData()
		})
		.catch((error) => {
			errorText.value = error
		})
}
const update = async () => {
	const db = getFirestore()
	const docRef = doc(db, collectionName, id.value)
	await updateDoc(docRef, {
		name: name.value,
		updated_at: serverTimestamp(),
	})
		.then(() => {
			status.value = '名前を更新しました'
			getData()
		})
		.catch((error) => {
			errorText.value = error
		})
}
const remove = async () => {
	const db = getFirestore()
	const docRef = doc(db, collectionName, id.value)
	await deleteDoc(docRef)
		.then(() => {
			status.value = '名前を削除しました'
			id.value = ''
			name.value = ''
			getData()
		})
		.catch((error) => {
			errorText.value = error
		})
}
const getData = async () => {
	const db = getFirestore()
	const docRef = doc(db, collectionName, id.value)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		data.value = docSnap.data() as Sample
	} else {
		errorText.value = 'No such document!'
	}
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
					<td class="border border-gray-300 p-2">{{ data.name }}</td>
					<td
						v-if="data.created_at !== null"
						class="border border-gray-300 p-2"
					>
						{{ data.created_at }}
					</td>
					<td
						v-if="data.updated_at !== null"
						class="border border-gray-300 p-2"
					>
						{{ data.updated_at }}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
