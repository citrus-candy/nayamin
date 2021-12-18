import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	setPersistence,
	browserLocalPersistence,
	onAuthStateChanged,
} from 'firebase/auth'

export const useAuthState = () => useState<boolean>('authState', () => false)
export const useUserId = () => useState<string>('userId', () => '')

export const _signUp = async (email: string, password: string) => {
	const auth = getAuth()
	await createUserWithEmailAndPassword(auth, email, password)
}

export const _signIn = async (email: string, password: string) => {
	const auth = getAuth()
	setPersistence(auth, browserLocalPersistence)
		.then(() => {
			signInWithEmailAndPassword(auth, email, password).then(
				(userCredential) => {
					const authState = useAuthState()
					const userId = useUserId()
					authState.value = true
					userId.value = userCredential.user.uid
				}
			)
		})
		.catch((error) => {
			console.log(error)
		})
}

export const _signOut = async () => {
	const auth = getAuth()
	await signOut(auth).then(() => {
		const authState = useAuthState()
		authState.value = false
	})
}

export const _onAuthStateChanged = async () => {
	const auth = getAuth()
	onAuthStateChanged(auth, (user) => {
		if (user) {
			const authState = useAuthState()
			const userId = useUserId()
			authState.value = true
			userId.value = user.uid
		}
	})
}
