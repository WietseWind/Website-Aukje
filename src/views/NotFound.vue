<script setup>
import PageHeading from '../components/PageHeading.vue'
</script>

<template>
  <section class="inner-page not-found">
    <PageHeading eyebrow="Even van het pad af" title="Hier loopt het" accent="spoor dood." />
    <p>Deze pagina kunnen we niet vinden. We helpen u graag weer op weg.</p>
    <RouterLink class="button button-primary" to="/">Terug naar home</RouterLink>
  </section>
</template>
