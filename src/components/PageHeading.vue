<script setup>
defineProps({ eyebrow: String, title: String, accent: String })
</script>

<template>
  <header class="page-heading">
    <p class="eyebrow">{{ eyebrow || 'De Zesvoeter · Zeist en omstreken' }}</p>
    <h1 tabindex="-1">{{ title }}<em v-if="accent">{{ accent }}</em></h1>
    <svg class="heading-flourish" viewBox="0 0 156 18" fill="none" aria-hidden="true"><path d="M2 12C44 0 89 3 153 9M18 16c47-8 81-6 119-2" stroke="currentColor" stroke-width="2" stroke-linecap="round" /></svg>
  </header>
</template>
