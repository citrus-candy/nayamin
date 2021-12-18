import { Timestamp } from 'firebase/firestore'

export interface Post {
	post_id?: string
	user_id: string
	text: string
	degree: string
	be_known: number
	never_mind: number
	created_at: Timestamp
	updated_at: Timestamp
}

export interface CardColor {
	background: string
	text: string
}
