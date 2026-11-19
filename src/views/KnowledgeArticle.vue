<script setup>
import { computed } from 'vue'
import { articles } from '../data/knowledge.js'
import PageHeading from '../components/PageHeading.vue'
import KnowledgeLinks from '../components/KnowledgeLinks.vue'
import SketchIcon from '../components/SketchIcon.vue'
const props = defineProps({ slug: { type: String, required: true } })
const article = computed(() => articles.find((item) => item.slug === props.slug))
</script>

<template>
  <article v-if="article" class="inner-page knowledge-page page-enter">
    <nav class="breadcrumbs" aria-label="Kruimelpad"><RouterLink to="/">Home</RouterLink><span aria-hidden="true">/</span><RouterLink to="/visie">Visie</RouterLink><span aria-hidden="true">/</span><span aria-current="page">{{ article.title }}</span></nav>
    <PageHeading eyebrow="Buitenleven & hondengeluk · Vanuit Aukjes visie" :title="article.title" />
    <div class="article-layout">
      <aside class="article-aside knowledge-aside">
        <SketchIcon :name="article.icon" /><p><em>{{ article.accent }}</em></p>
        <nav class="article-contents" aria-label="In dit artikel"><span>In dit verhaal</span><a v-for="section in article.sections" :key="section.id" :href="`#${section.id}`">{{ section.title }}</a></nav>
      </aside>
      <div class="prose">
        <p class="article-byline">De Zesvoeter · <time :datetime="article.dateModified">19 november 2026</time></p>
        <p class="lead">{{ article.intro }}</p>
        <aside class="knowledge-fact"><SketchIcon name="flower" /><div><h2>Wist u dat…</h2><p>{{ article.fact }}</p><a v-if="article.factSource" :href="article.factSource.url" target="_blank" rel="noopener noreferrer" class="source-link">{{ article.factSource.name }}</a></div></aside>
        <section v-for="section in article.sections" :id="section.id" :key="section.id" class="knowledge-section" :aria-labelledby="`${section.id}-title`">
          <h2 :id="`${section.id}-title`">{{ section.title }}</h2>
          <p v-for="paragraph in section.paragraphs" :key="paragraph">{{ paragraph }}</p>
          <p v-if="section.sources.length" class="section-sources">Achtergrond: <template v-for="(source, index) in section.sources" :key="source.url"><span v-if="index"> · </span><a :href="source.url" target="_blank" rel="noopener noreferrer">{{ source.name }}</a></template></p>
        </section>
        <div class="knowledge-service"><h2>Zo gaan we samen op pad</h2><p>De Zesvoeter is de hondenuitlaatservice van Aukje Wind voor Zeist en regio Utrecht. Met persoonlijke aandacht en positief begeleiden, en alle ruimte om buiten te zijn in Achterveld.</p><div class="knowledge-actions"><RouterLink to="/werkwijze" class="text-link">Bekijk de werkwijze</RouterLink><RouterLink to="/contact" class="text-link">Neem contact op</RouterLink></div></div>
      </div>
    </div>
    <section class="knowledge-more" aria-labelledby="more-title"><p class="eyebrow">Nog even verder snuffelen</p><h2 id="more-title">Meer over hondengeluk</h2><KnowledgeLinks :exclude="article.slug" /></section>
  </article>
</template>
