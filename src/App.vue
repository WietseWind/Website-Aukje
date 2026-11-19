<script setup>
import { nextTick, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import { navigation } from './router'
import SketchIcon from './components/SketchIcon.vue'

const route = useRoute()
const menuOpen = ref(false)
const menuButton = ref(null)
const navigationReady = ref(false)
onMounted(() => { navigationReady.value = true })
watch(() => route.fullPath, async () => {
  menuOpen.value = false
  if (!import.meta.env.SSR) {
    await nextTick()
    document.querySelector('main h1')?.focus({ preventScroll: true })
  }
})

function closeMenu() {
  if (menuOpen.value) {
    menuOpen.value = false
    menuButton.value?.focus()
  }
}

useHead(() => ({
  htmlAttrs: { lang: 'nl' },
  title: route.name === 'home' ? 'De Zesvoeter · Hondenuitlaatservice in Zeist' : `${route.meta.title} · De Zesvoeter`,
  meta: [
    { name: 'description', content: route.meta.description || 'Hondenuitlaatservice De Zesvoeter van Aukje Wind in Zeist en omstreken.' },
    { property: 'og:title', content: `${route.meta.title} · De Zesvoeter` },
    { property: 'og:description', content: route.meta.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'nl_NL' },
    ...(route.name === 'not-found' ? [{ name: 'robots', content: 'noindex' }] : []),
  ],
}))
</script>

<template>
  <div class="site-shell" @keydown.esc="closeMenu">
    <a class="skip-link" href="#main">Naar de inhoud</a>
    <header class="site-header wrap" :class="{ 'navigation-ready': navigationReady }">
      <RouterLink to="/" class="brand" aria-label="De Zesvoeter, naar de homepagina"><SketchIcon class="brand-paw" /><span>de zesvoeter<span class="brand-subtitle">hondenuitlaatservice</span></span></RouterLink>
      <button v-if="navigationReady" ref="menuButton" class="menu-toggle" type="button" :aria-label="menuOpen ? 'Menu sluiten' : 'Menu openen'" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen"><span>{{ menuOpen ? 'Sluiten' : 'Menu' }}</span><SketchIcon :name="menuOpen ? 'close' : 'menu'" /></button>
      <nav id="main-navigation" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Hoofdnavigatie">
        <template v-for="item in navigation" :key="item.path">
          <a v-if="item.external" :href="item.path" target="_blank" rel="noopener noreferrer" class="nav-link nav-photos">{{ item.label }}<SketchIcon name="instagram" /></a>
          <RouterLink v-else :to="item.path" class="nav-link" :class="{ 'nav-contact': item.path === '/contact' }" exact-active-class="is-active" @click="menuOpen = false">{{ item.label }}</RouterLink>
        </template>
      </nav>
    </header>
    <main id="main" class="wrap" tabindex="-1"><RouterView /></main>
    <footer class="site-footer wrap">
      <div class="footer-top">
        <RouterLink to="/" class="brand footer-brand"><SketchIcon class="brand-paw" /><span>de zesvoeter<span class="brand-subtitle">vier poten + twee voeten</span></span></RouterLink>
        <p>Met liefde voor honden.<br /><span>En voor lekker buiten zijn.</span></p>
        <a class="instagram-link" href="https://www.instagram.com/de_zesvoeter/" target="_blank" rel="noopener noreferrer"><SketchIcon name="instagram" /><span>Een kijkje in de roedel</span></a>
      </div>
      <div class="footer-bottom"><span>Aukje Wind · Zeist en omstreken</span><RouterLink to="/wandelvoorwaarden">Wandelvoorwaarden</RouterLink><span>KvK 76850994</span></div>
    </footer>
  </div>
</template>
