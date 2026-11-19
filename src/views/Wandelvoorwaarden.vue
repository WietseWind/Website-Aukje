<script setup>
import PageHeading from '../components/PageHeading.vue'
import SketchIcon from '../components/SketchIcon.vue'
import { content } from '../data/content'
</script>

<template>
  <article class="inner-page page-enter">
    <PageHeading eyebrow="Duidelijke afspraken, fijne wandelingen" title="Wandelvoorwaarden" />
    <div class="article-layout">
      <aside class="article-aside"><SketchIcon name="flower" /><p>Goed geregeld.<br /><em>Gerust op pad.</em></p><RouterLink to="/contact" class="text-link">Vragen? Neem contact op</RouterLink></aside>
      <div class="prose"><ul class="conditions-list"><li v-for="condition in content.conditions" :key="condition">{{ condition }}</li></ul></div>
    </div>
  </article>
</template>
