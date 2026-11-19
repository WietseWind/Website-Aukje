<script setup>
import PageHeading from '../components/PageHeading.vue'
import SketchIcon from '../components/SketchIcon.vue'
import { content } from '../data/content'
</script>

<template>
  <article class="inner-page pricing-page page-enter">
    <PageHeading eyebrow="Een uur buiten, een tevreden hond" title="Tarieven" />
    <div class="rate-grid">
      <section class="rate-card"><SketchIcon name="paw" /><h2>Groepswandeling</h2><p class="rate-price">€ 16,50<span>per wandeling</span></p></section>
      <section class="rate-card rate-card-lilac"><SketchIcon name="sun" /><h2>Weekend &amp; feestdagen</h2><p class="rate-price">€ 20<span>per wandeling</span></p><p>Wandeling in het weekend of op feestdagen.</p></section>
      <section class="rate-card rate-card-light"><SketchIcon name="heart" /><h2>Een tweede hond</h2><p class="rate-price">€ 10,50<span>per groepswandeling</span></p><p>Een 2e hond op hetzelfde adres ontvangt korting.</p></section>
    </div>
    <p class="rates-note">{{ content.pricing[6] }}</p>
    <div class="article-layout">
      <aside class="article-aside"><SketchIcon name="clock" /><p>Twee keer per dag<br /><em>tijd voor buiten.</em></p></aside>
      <div class="prose">
        <h2>Wandeltijden</h2><p>{{ content.pricing[2] }}</p>
        <div class="walk-times"><section v-for="paragraph in content.pricing.slice(3, 5)" :key="paragraph" v-html="paragraph"></section></div>
        <p>{{ content.pricing[5] }}</p>
        <h2>Afspraken &amp; betaling</h2><p v-for="paragraph in content.pricing.slice(7)" :key="paragraph">{{ paragraph }}</p>
      </div>
    </div>
  </article>
</template>
