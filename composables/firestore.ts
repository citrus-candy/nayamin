import { useState } from '#app'
import {
	getFirestore,
	collection,
	doc,
	addDoc,
	updateDoc,
	deleteDoc,
	getDoc,
	getDocs,
	serverTimestamp,
	Timestamp,
	query,
	where,
} from 'firebase/firestore'
import { Post } from '@/types'

type Sample = {
	name: string
	created_at?: Timestamp
	updated_at?: Timestamp
}

export const usePosts = () => useState<Post[]>('posts', () => [])
export const useMyPosts = () => useState<Post[]>('myPosts', () => [])
export const useId = () => useState<string>('id', () => '')
export const useSample = () =>
	useState<Sample>('sample', () => ({
		name: '',
		created_at: null,
		updated_at: null,
	}))

export const _addSampleName = async (collectionName: string, name: string) => {
	const db = getFirestore()
	const collectionRef = collection(db, collectionName)

	await addDoc(collectionRef, {
		name: name,
		created_at: serverTimestamp(),
	}).then((doc) => {
		useId().value = doc.id
	})
}

export const _updateSampleName = async (
	collectionName: string,
	name: string
) => {
	const db = getFirestore()
	const docRef = doc(db, collectionName, useId().value)

	await updateDoc(docRef, {
		name: name,
		updated_at: serverTimestamp(),
	})
}

export const _removeSampleName = async (collectionName: string) => {
	const db = getFirestore()
	const docRef = doc(db, collectionName, useId().value)

	await deleteDoc(docRef).then(() => {
		useId().value = ''
		useSample().value = {
			name: '',
			created_at: null,
			updated_at: null,
		}
	})
}

export const _getSampleName = async (collectionName: string) => {
	const db = getFirestore()
	const docRef = doc(db, collectionName, useId().value)
	const docSnap = await getDoc(docRef)

	if (docSnap.exists()) {
		useSample().value = docSnap.data() as Sample
	}
}

export const _addPost = async (text: string, degree: string) => {
	const db = getFirestore()
	const userId = useUserId()
	const collectionRef = collection(db, 'posts')

	await addDoc(collectionRef, {
		user_id: userId.value,
		text: text,
		degree: degree,
		be_known: 0,
		never_mind: 0,
		created_at: serverTimestamp(),
		updated_at: serverTimestamp(),
	})
}

export const _getPost = async () => {
	const db = getFirestore()
	const collectionRef = collection(db, 'posts')
	const querySnapshot = await getDocs(collectionRef)

	const posts = usePosts()

	posts.value.length = 0
	querySnapshot.forEach((doc) => {
		const data = doc.data() as Post
		const postData: Post = { ...data }
		postData.post_id = doc.id
		posts.value.push(postData)
	})
}

export const _getMyPost = async (userId: string) => {
	const db = getFirestore()
	const collectionRef = collection(db, 'posts')
	const docQuery = query(collectionRef, where('user_id', '==', userId))
	const querySnapshot = await getDocs(docQuery)

	const myPosts = useMyPosts()

	myPosts.value.length = 0
	querySnapshot.forEach((doc) => {
		const data = doc.data() as Post
		const postData: Post = { ...data }
		postData.post_id = doc.id
		myPosts.value.push(postData)
	})
}
