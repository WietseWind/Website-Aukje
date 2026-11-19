<script setup>
import PageHeading from '../components/PageHeading.vue'
import { content } from '../data/content'
import walkingPhoto from '../assets/aukje-de-zesvoeter.jpeg'
</script>

<template>
  <article class="inner-page page-enter">
    <PageHeading eyebrow="Het gezicht achter De Zesvoeter" title="Over mij" />
    <div class="article-layout">
      <aside class="article-aside about-aside"><img :src="walkingPhoto" width="1280" height="720" alt="Aukje Wind met haar flatcoated retrievers in het bos" /><p>Aukje Wind<br /><em>en haar meiden.</em></p></aside>
      <div class="prose"><p v-for="(paragraph, index) in content.about" :key="index" :class="{ lead: index === 0 }">{{ paragraph }}</p></div>
    </div>
  </article>
</template>
