<script setup>
import PageHeading from '../components/PageHeading.vue'
import ContactLinks from '../components/ContactLinks.vue'
import RetrieverSketch from '../components/RetrieverSketch.vue'
import Vol from './partials/Vol.vue'
</script>

<template>
  <div class="inner-page contact-page page-enter">
    <PageHeading eyebrow="We horen graag van u" title="Contact" />
    <section class="contact-layout" aria-label="Contactgegevens">
      <div class="contact-details"><p class="eyebrow">Uitlaatservice · Zeist en omstreken</p><h2>De Zesvoeter</h2><RouterLink class="contact-owner" to="/over-mij">Aukje Wind</RouterLink><ContactLinks /><p class="contact-kvk">KvK nummer: <a href="https://www.kvk.nl/zoeken/?source=all&amp;q=76850994&amp;start=0&amp;site=kvk2014" target="_blank" rel="noopener noreferrer">76850994</a></p></div>
      <RetrieverSketch />
    </section>
    <Vol />
  </div>
</template>
