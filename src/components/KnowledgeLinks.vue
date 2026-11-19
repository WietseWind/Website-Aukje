<script setup>
import { computed } from 'vue'
import { articles } from '../data/knowledge.js'
import SketchIcon from './SketchIcon.vue'
const props = defineProps({ exclude: String })
const related = computed(() => articles.filter((article) => article.slug !== props.exclude))
</script>

<template>
  <div class="knowledge-grid" :style="{ '--knowledge-columns': related.length === 3 ? 3 : 2 }">
    <RouterLink v-for="article in related" :key="article.slug" :to="article.path" class="knowledge-card">
      <SketchIcon :name="article.icon" />
      <h3>{{ article.title }}</h3>
      <p>{{ article.summary }}</p>
      <span class="knowledge-read">Lees het verhaal</span>
    </RouterLink>
  </div>
</template>
