import { CardColor } from '@/types'

export const _getCardColor = (degree: string): CardColor => {
	switch (degree) {
		case '1':
			return {
				background: 'bg-indigo-50',
				text: 'text-black',
			}
		case '2':
			return {
				background: 'bg-indigo-100',
				text: 'text-black',
			}
		case '3':
			return {
				background: 'bg-indigo-200',
				text: 'text-black',
			}
		case '4':
			return {
				background: 'bg-indigo-300',
				text: 'text-black',
			}
		case '5':
			return {
				background: 'bg-indigo-400',
				text: 'text-white',
			}
		case '6':
			return {
				background: 'bg-indigo-500',
				text: 'text-white',
			}
		case '7':
			return {
				background: 'bg-indigo-600',
				text: 'text-white',
			}
		case '8':
			return {
				background: 'bg-indigo-700',
				text: 'text-white',
			}
		case '9':
			return {
				background: 'bg-indigo-800',
				text: 'text-white',
			}
		case '10':
			return {
				background: 'bg-indigo-900',
				text: 'text-white',
			}
	}
}
