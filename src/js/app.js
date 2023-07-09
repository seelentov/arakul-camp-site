import { isWebp } from './modules/isWebp.js'
// REVIEWS

import catalog from './modules/catalog.js'
import advantages from './modules/advantages.js'
import camping from './modules/camping.js'
import gallery from './modules/gallery.js'

isWebp()

window.onload = window.scrollTo({
  top: 0
})

const demoAlert = () => {
  alert('Это демо-макет, функционал отправки отсутствует')
}
window.demoAlert = demoAlert
