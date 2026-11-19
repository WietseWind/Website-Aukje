import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Tarieven from '../views/Tarieven.vue'
import OverMij from '../views/OverMij.vue'
import Visie from '../views/Visie.vue'
import Wandelvoorwaarden from '../views/Wandelvoorwaarden.vue'
import Werkwijze from '../views/Werkwijze.vue'
import NotFound from '../views/NotFound.vue'

export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/visie', label: 'Visie' },
  { path: '/werkwijze', label: 'Werkwijze' },
  { path: '/over-mij', label: 'Over mij' },
  { path: '/wandelvoorwaarden', label: 'Wandelvoorwaarden' },
  { path: 'https://www.instagram.com/de_zesvoeter/', label: 'Foto’s', external: true },
  { path: '/tarieven', label: 'Tarieven' },
  { path: '/contact', label: 'Contact' },
]

export const routes = [
  { path: '/', name: 'home', component: Home, meta: { title: 'Hondenuitlaatservice in Zeist', description: 'Hondenuitlaatservice De Zesvoeter van Aukje Wind. Liefdevolle wandelingen voor uw hond in Zeist en omstreken, met aandacht, plezier en positieve leermethoden.' } },
  { path: '/visie', name: 'visie', component: Visie, meta: { title: 'Visie', description: 'Vertrouwen, geduld en liefdevolle omgang. Lees de visie van Aukje Wind op het uitlaten van uw hond bij De Zesvoeter.' } },
  { path: '/werkwijze', name: 'werkwijze', component: Werkwijze, meta: { title: 'Werkwijze', description: 'Van een vrijblijvende kennismaking tot ophalen, samen wandelen en weer thuisbrengen. Zo werkt hondenuitlaatservice De Zesvoeter.' } },
  { path: '/over-mij', name: 'over-mij', component: OverMij, meta: { title: 'Over mij', description: 'Maak kennis met Aukje Wind, de hondenliefhebber achter De Zesvoeter in Zeist, en haar flatcoated retrievers.' } },
  { path: '/wandelvoorwaarden', name: 'wandelvoorwaarden', component: Wandelvoorwaarden, meta: { title: 'Wandelvoorwaarden', description: 'Alle wandelvoorwaarden van hondenuitlaatservice De Zesvoeter. Duidelijke afspraken voor een fijne en verantwoorde wandeling.' } },
  { path: '/tarieven', name: 'tarieven', component: Tarieven, meta: { title: 'Tarieven', description: 'Bekijk de tarieven, wandeltijden en betalingsafspraken van hondenuitlaatservice De Zesvoeter in Zeist en omstreken.' } },
  { path: '/contact', name: 'contact', component: Contact, meta: { title: 'Contact', description: 'Neem contact op met Aukje Wind van hondenuitlaatservice De Zesvoeter via WhatsApp of e-mail, of meld uw hond aan voor de wachtlijst.' } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: 'Pagina niet gevonden' } },
]

export function scrollBehavior(to, from, savedPosition) {
  return savedPosition || { top: 0 }
}
