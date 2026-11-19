<script setup>
import RetrieverSketch from '../components/RetrieverSketch.vue'
import ContactLinks from '../components/ContactLinks.vue'
import SketchIcon from '../components/SketchIcon.vue'
import Vol from './partials/Vol.vue'
import walkingPhoto from '../assets/aukje-de-zesvoeter.jpeg'
</script>

<template>
  <div class="home page-enter">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="little-sun" aria-hidden="true">✳</span> Hondenuitlaatservice · Zeist en omstreken</p>
        <h1 id="home-title" tabindex="-1">Samen op pad.<br /><em>Helemaal hond.</em></h1>
        <p class="hero-intro">Welkom bij <strong>De Zesvoeter</strong>.<br />Met liefde, aandacht en plezier op pad met uw hond.</p>
        <RouterLink class="owner-link" to="/over-mij"><span class="owner-dash" aria-hidden="true"></span> Aukje Wind</RouterLink>
        <ContactLinks />
      </div>
      <RetrieverSketch />
    </section>
    <Vol />
    <figure class="walking-photo">
      <img :src="walkingPhoto" width="1280" height="720" alt="Aukje wandelt met haar flatcoated retrievers over een bospad" fetchpriority="high" />
      <figcaption><SketchIcon name="paw" /><span>Het liefst<br /><em>lekker buiten.</em></span></figcaption>
    </figure>
    <div class="photo-footnote"><span>De Zesvoeter · Aukje Wind</span><span><SketchIcon name="location" /> Zeist en omstreken</span></div>
  </div>
</template>
