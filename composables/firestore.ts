import { useState } from '#app'
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
	created_at?: Timestamp
	updated_at?: Timestamp
}

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
