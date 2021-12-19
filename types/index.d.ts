import { Timestamp } from 'firebase/firestore'

export interface Post {
	post_id?: string
	user_id: string
	text: string
	degree: string
	be_known: number
	never_mind: number
	is_resolved: boolean
	created_at: Timestamp
	updated_at: Timestamp
}
export interface Answer {
	user_id: string
	text: string
	created_at: Timestamp
	updated_at: Timestamp
}

export interface CardColor {
	negativeColor: string
	positiveColor: string
	text: string
}
