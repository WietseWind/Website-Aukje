<script setup>
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import SiteHeader from './components/SiteHeader.vue'
import SketchIcon from './components/SketchIcon.vue'
import { pageHead } from './seo.js'

const route = useRoute()
useHead(() => pageHead(route))
</script>

<template>
  <div class="site-shell">
    <a class="skip-link" href="#main">Naar de inhoud</a>
    <SiteHeader />
    <main id="main" class="wrap" tabindex="-1"><RouterView /></main>
    <footer class="site-footer wrap">
      <div class="footer-top">
        <RouterLink to="/" class="brand footer-brand"><SketchIcon class="brand-paw" /><span>de zesvoeter<span class="brand-subtitle">vier poten + twee voeten</span></span></RouterLink>
        <p>Met liefde voor honden.<br /><span>En voor lekker buiten zijn.</span></p>
        <a class="instagram-link" href="https://www.instagram.com/de_zesvoeter/" target="_blank" rel="noopener noreferrer"><SketchIcon name="instagram" /><span>Een kijkje in de roedel</span></a>
      </div>
      <div class="footer-bottom"><span>Aukje Wind · Zeist en regio Utrecht</span><RouterLink to="/wandelvoorwaarden">Wandelvoorwaarden</RouterLink><span>KvK 76850994</span></div>
    </footer>
  </div>
</template>
