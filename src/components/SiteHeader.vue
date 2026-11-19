<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { navigation } from '../router'
import SketchIcon from './SketchIcon.vue'

const route = useRoute()
const menuOpen = ref(false)
const menuButton = ref(null)
const header = ref(null)
const navigationReady = ref(false)

function disclosure() {
  return header.value?.querySelector('.nav-disclosure')
}
function closeNavigation() {
  menuOpen.value = false
  disclosure()?.removeAttribute('open')
}
function toggleNavigation() {
  if (menuOpen.value) closeNavigation()
  else menuOpen.value = true
}
function onEscape(event) {
  if (disclosure()?.open) {
    disclosure().removeAttribute('open')
    disclosure().querySelector('summary')?.focus()
    event.preventDefault()
  } else if (menuOpen.value) {
    menuOpen.value = false
    menuButton.value?.focus()
    event.preventDefault()
  }
}
function onOutsidePointer(event) {
  if (header.value && !header.value.contains(event.target)) closeNavigation()
}
onMounted(() => {
  navigationReady.value = true
  document.addEventListener('pointerdown', onOutsidePointer)
})
onBeforeUnmount(() => document.removeEventListener('pointerdown', onOutsidePointer))
watch(() => route.fullPath, async (to, from) => {
  closeNavigation()
  if (!import.meta.env.SSR && to.split('#')[0] !== from.split('#')[0]) {
    await nextTick()
    document.querySelector('main h1')?.focus({ preventScroll: true })
  }
})
</script>

<template>
  <header ref="header" class="site-header wrap" :class="{ 'navigation-ready': navigationReady }" @keydown.esc="onEscape">
    <RouterLink to="/" @click="closeNavigation" class="brand" aria-label="De Zesvoeter, naar de homepagina"><SketchIcon class="brand-paw" /><span>de zesvoeter<span class="brand-subtitle">hondenuitlaatservice</span></span></RouterLink>
    <button v-if="navigationReady" ref="menuButton" class="menu-toggle" type="button" :aria-label="menuOpen ? 'Menu sluiten' : 'Menu openen'" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="toggleNavigation"><span>{{ menuOpen ? 'Sluiten' : 'Menu' }}</span><SketchIcon :name="menuOpen ? 'close' : 'menu'" /></button>
    <nav id="main-navigation" class="site-nav" :class="{ 'is-open': menuOpen }" aria-label="Hoofdnavigatie">
      <template v-for="item in navigation" :key="item.path">
        <details v-if="item.children" class="nav-disclosure">
          <summary class="nav-link" :class="{ 'is-active': route.path.startsWith('/visie') }">{{ item.label }}<SketchIcon name="chevron" /></summary>
          <div class="nav-submenu">
            <RouterLink v-for="child in item.children" :key="child.path" :to="child.path" @click="closeNavigation" class="submenu-link" :class="{ 'submenu-overview': child.overview }" exact-active-class="is-active"><SketchIcon :name="child.icon" /><span>{{ child.label }}<small v-if="child.overview">Vertrouwen en aandacht als vertrekpunt</small></span></RouterLink>
          </div>
        </details>
        <a v-else-if="item.external" :href="item.path" @click="closeNavigation" target="_blank" rel="noopener noreferrer" class="nav-link nav-photos">{{ item.label }}<SketchIcon name="instagram" /></a>
        <RouterLink v-else :to="item.path" @click="closeNavigation" class="nav-link" :class="{ 'nav-contact': item.path === '/contact' }" exact-active-class="is-active">{{ item.label }}</RouterLink>
      </template>
    </nav>
  </header>
</template>
