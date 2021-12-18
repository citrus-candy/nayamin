import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faLeaf,
	faChevronUp,
	faChevronDown,
	faArrowLeft,
	faSignInAlt,
	faSignOutAlt,
	faCommentDots,
	faComments,
	faCrown,
	faBars,
	faTimes,
	faEye,
	faEyeSlash,
	faTag,
	faCommentMedical,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faLeaf,
	faChevronUp,
	faChevronDown,
	faArrowLeft,
	faSignInAlt,
	faSignOutAlt,
	faCommentDots,
	faComments,
	faCrown,
	faBars,
	faTimes,
	faEye,
	faEyeSlash,
	faTag,
	faCommentMedical
)

export default defineNuxtPlugin((nuxtApp) => {
	return nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
