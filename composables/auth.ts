import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

export const _signUp = async (email: string, password: string) => {
	const auth = getAuth()
	await createUserWithEmailAndPassword(auth, email, password)
}

export const _signIn = async (email: string, password: string) => {
	const auth = getAuth()
	await signInWithEmailAndPassword(auth, email, password)
}

export const _signOut = async () => {
	const auth = getAuth()
	await signOut(auth)
}
