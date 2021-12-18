import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

export const useAuthState = () => useState<boolean>('authState', () => false)
export const useUserId = () => useState<string>('userId', () => '')

export const _signUp = async (email: string, password: string) => {
	const auth = getAuth()
	await createUserWithEmailAndPassword(auth, email, password)
}

export const _signIn = async (email: string, password: string) => {
	const auth = getAuth()
	await signInWithEmailAndPassword(auth, email, password).then(
		(userCredential) => {
			const authState = useAuthState()
			const userId = useUserId()
			authState.value = true
			userId.value = userCredential.user.uid
		}
	)
}

export const _signOut = async () => {
	const auth = getAuth()
	await signOut(auth).then(() => {
		const authState = useAuthState()
		authState.value = false
	})
}
