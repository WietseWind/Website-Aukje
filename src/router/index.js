import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Tarieven from '../views/Tarieven.vue'
import OverMij from '../views/OverMij.vue'
import Visie from '../views/Visie.vue'
import Wandelvoorwaarden from '../views/Wandelvoorwaarden.vue'
import Werkwijze from '../views/Werkwijze.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/visie',
    name: 'visie',
    component: Visie
  },
  {
    path: '/werkwijze',
    name: 'werkwijze',
    component: Werkwijze
  },
  {
    path: '/over-mij',
    name: 'over-mij',
    component: OverMij
  },
  {
    path: '/wandelvoorwaarden',
    name: 'wandelvoorwaarden',
    component: Wandelvoorwaarden
  },
  {
    path: '/tarieven',
    name: 'tarieven',
    component: Tarieven
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  }
  // ,
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
