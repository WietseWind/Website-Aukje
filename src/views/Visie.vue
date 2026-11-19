<script setup>
import PageHeading from '../components/PageHeading.vue'
import SketchIcon from '../components/SketchIcon.vue'
import { content } from '../data/content'
</script>

<template>
  <article class="inner-page page-enter">
    <PageHeading eyebrow="Vertrouwen als vertrekpunt" title="Visie" />
    <div class="article-layout">
      <aside class="article-aside"><SketchIcon name="heart" /><p>Een fijne wandeling<br />begint met <em>vertrouwen.</em></p></aside>
      <div class="prose">
        <p class="lead">{{ content.vision[0] }}</p><p>{{ content.vision[1] }}</p>
        <ul class="values-list"><li v-for="value in content.values" :key="value"><SketchIcon name="flower" />{{ value }}</li></ul>
        <p>{{ content.vision[2] }}</p>
      </div>
    </div>
  </article>
</template>
