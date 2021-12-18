import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLeaf)

export default defineNuxtPlugin((nuxtApp) => {
	return nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})