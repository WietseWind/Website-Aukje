<script setup>
import RetrieverSketch from '../components/RetrieverSketch.vue'
import ContactLinks from '../components/ContactLinks.vue'
import SketchIcon from '../components/SketchIcon.vue'
import Vol from './partials/Vol.vue'
import { site } from '../data/site.js'
const walkingPhoto = site.photo
</script>

<template>
  <div class="home page-enter">
    <section class="home-hero" aria-labelledby="home-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="little-sun" aria-hidden="true">✳</span> Hondenuitlaatservice · Zeist & regio Utrecht</p>
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
    <div class="photo-footnote"><span>De Zesvoeter · Aukje Wind</span><span><SketchIcon name="location" /> Zeist & regio Utrecht</span></div>
    <section class="home-service" aria-labelledby="outside-title">
      <div><p class="eyebrow">Zeist & regio Utrecht · Buiten in Achterveld</p><h2 id="outside-title">Alle ruimte.<br /><em>Alle aandacht.</em></h2></div>
      <div class="prose"><p>De Zesvoeter is de hondenuitlaatservice van Aukje Wind voor Zeist en regio Utrecht. Met liefde voor honden, positieve begeleiding en aandacht voor wat ieder dier nodig heeft.</p><p>De honden gaan naar een heerlijke buitenruimte van duizenden vierkante meters in Achterveld, Midden-Nederland. Veel gras en ruimte om te rennen en spelen: lekker buiten zijn, samen met een passende groep.</p><div class="knowledge-actions"><RouterLink to="/werkwijze" class="text-link">Zo gaan we op pad</RouterLink><RouterLink to="/visie" class="text-link">Lees meer over onze visie</RouterLink></div></div>
    </section>
    <section class="home-questions" aria-labelledby="questions-title">
      <p class="eyebrow">Handig om te weten</p><h2 id="questions-title">Even kennismaken</h2>
      <details><summary>Voor welke omgeving is de uitlaatservice?</summary><p>De Zesvoeter richt zich op Zeist en regio Utrecht. Tijdens de vrijblijvende kennismaking bespreekt Aukje wat er voor uw adres en de ophaalroute mogelijk is.</p></details>
      <details><summary>Waar gaan de honden buiten spelen?</summary><p>We gaan naar een buitenruimte van duizenden vierkante meters in Achterveld, Midden-Nederland. Er is veel gras en ruimte om te rennen en spelen. <RouterLink to="/werkwijze">Lees meer over de werkwijze.</RouterLink></p></details>
      <details><summary>Hoe krijgt iedere hond persoonlijke aandacht?</summary><p>Aukje kijkt naar wat iedere hond nodig heeft en hoe de honden zich binnen de groep voelen. De groepsgrootte is afhankelijk van de samenstelling. Gewenst gedrag wordt op een positieve manier beloond. <RouterLink to="/visie">Ontdek de visie.</RouterLink></p></details>
      <details><summary>Kan mijn hond op dit moment mee?</summary><p>Alle dagen zitten momenteel vol. U kunt uw hond vrijblijvend aanmelden voor de wachtlijst via <a :href="site.waitingList" target="_blank" rel="noopener noreferrer">het aanmeldformulier</a>. Voor vragen kunt u <RouterLink to="/contact">contact opnemen met Aukje</RouterLink>.</p></details>
    </section>
  </div>
</template>
