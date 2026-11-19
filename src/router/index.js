import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Tarieven from '../views/Tarieven.vue'
import OverMij from '../views/OverMij.vue'
import Visie from '../views/Visie.vue'
import Wandelvoorwaarden from '../views/Wandelvoorwaarden.vue'
import Werkwijze from '../views/Werkwijze.vue'
import KnowledgeArticle from '../views/KnowledgeArticle.vue'
import NotFound from '../views/NotFound.vue'
import { pages } from '../data/pages.js'
import { articles } from '../data/knowledge.js'

export const navigation = [
  { path: '/', label: 'Home' },
  { path: '/visie', label: 'Visie', children: [{ path: '/visie', label: 'Onze visie', icon: 'heart', overview: true }, ...articles.map((article) => ({ path: article.path, label: article.title, icon: article.icon }))] },
  { path: '/werkwijze', label: 'Werkwijze' },
  { path: '/over-mij', label: 'Over mij' },
  { path: '/wandelvoorwaarden', label: 'Wandelvoorwaarden' },
  { path: 'https://www.instagram.com/de_zesvoeter/', label: 'Foto’s', external: true },
  { path: '/tarieven', label: 'Tarieven' },
  { path: '/contact', label: 'Contact' },
]

const components = { home: Home, contact: Contact, tarieven: Tarieven, 'over-mij': OverMij, visie: Visie, wandelvoorwaarden: Wandelvoorwaarden, werkwijze: Werkwijze }
export const routes = [
  ...pages.map(({ path, name, ...meta }) => ({ path, name, meta, component: meta.articleSlug ? KnowledgeArticle : components[name], ...(meta.articleSlug ? { props: { slug: meta.articleSlug } } : {}) })),
  { path: '/404', name: 'static-404', component: NotFound, meta: { title: 'Pagina niet gevonden', noindex: true } },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound, meta: { title: 'Pagina niet gevonden', noindex: true } },
]

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) return savedPosition
  if (to.hash) return { el: to.hash, top: 24 }
  return { top: 0 }
}
