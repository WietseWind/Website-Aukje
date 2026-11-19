<script setup>
import PageHeading from '../components/PageHeading.vue'
import SketchIcon from '../components/SketchIcon.vue'
import { content } from '../data/content'
</script>

<template>
  <article class="inner-page page-enter">
    <PageHeading eyebrow="Van kennismaken tot kwispelen" title="Werkwijze" />
    <div class="article-layout">
      <aside class="article-aside"><SketchIcon name="paw" /><p>Ophalen, wandelen,<br /><em>blij weer thuis.</em></p><RouterLink to="/contact" class="text-link">Neem contact op</RouterLink></aside>
      <div class="prose"><p v-for="(paragraph, index) in content.method" :key="index" :class="{ lead: index === 0 }">{{ paragraph }}</p></div>
    </div>
  </article>
</template>
