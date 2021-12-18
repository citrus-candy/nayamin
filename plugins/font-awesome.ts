import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
	faLeaf,
	faArrowLeft,
	faSignInAlt,
	faSignOutAlt,
	faCommentDots,
	faComments,
	faCrown,
	faBars,
	faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faLeaf,
	faArrowLeft,
	faSignInAlt,
	faSignOutAlt,
	faCommentDots,
	faComments,
	faCrown,
	faBars,
	faTimes
)

export default defineNuxtPlugin((nuxtApp) => {
	return nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})
