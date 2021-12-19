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
	orderBy,
} from 'firebase/firestore'
import { Post, Answer } from '@/types'

type Sample = {
	name: string
	created_at?: Timestamp
	updated_at?: Timestamp
}

export const usePost = () =>
	useState<Post>('post', () => ({
		user_id: '',
		post_id: '',
		text: '',
		degree: '5',
		be_known: 0,
		never_mind: 0,
		created_at: Timestamp.now(),
		updated_at: Timestamp.now(),
	}))
export const usePosts = () => useState<Post[]>('posts', () => [])
export const useMyPosts = () => useState<Post[]>('myPosts', () => [])
export const useAnswers = () => useState<Answer[]>('id', () => [])
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

export const _addAnswer = async (text: string, post_id: string) => {
	const db = getFirestore()
	const userId = useUserId()
	const collectionRef = collection(
		doc(collection(db, 'posts'), post_id),
		'answers'
	)

	await addDoc(collectionRef, {
		user_id: userId.value,
		text: text,
		created_at: serverTimestamp(),
		updated_at: serverTimestamp(),
	})
}

export const _getPost = async (docName: string) => {
	const db = getFirestore()
	const docRef = doc(db, 'posts', docName)
	const docSnap = await getDoc(docRef)

	const post = usePost()

	if (docSnap.exists()) {
		post.value = docSnap.data() as Post
	}
}

export const _getPosts = async () => {
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

export const _getAnswers = async (post_id: string) => {
	const db = getFirestore()
	const docRef = doc(collection(db, 'posts'), post_id)
	const collectionRef = collection(docRef, 'answers')
	const docQuery = query(collectionRef, orderBy('created_at', 'desc'))
	const querySnapshot = await getDocs(docQuery)
	const answers = useAnswers()

	answers.value.length = 0
	querySnapshot.forEach((doc) => {
		const data = doc.data() as Answer
		const answerData: Answer = { ...data }
		answers.value.push(answerData)
	})
}

export const _updatePostField = async (
	docName: string,
	key: string,
	value: string | number
) => {
	const db = getFirestore()
	const docRef = doc(db, 'posts', docName)
	await updateDoc(docRef, {
		[key]: value,
		updated_at: serverTimestamp(),
	})
}
