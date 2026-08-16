import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      Prism
    }
  }
})
