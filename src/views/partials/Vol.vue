<template>
  <div section="full" class="alert alert-warning px-3 py-2 mt-3 text-center">
    Let op! Per maart 2020 zitten de <b>dinsdag</b>ochtend en <b>donderdag</b>ochtend <b><u>vol</u></b>. Op deze dagen is er nog wel
    ruimte op de middagen. <b>Op de andere dagen zijn er nog enkele plekken beschikbaar in zowel de ochtend als de middag.</b>
    Je kunt natuurlijk wel altijd informeren naar een plekje op de wachtlijst voor de dinsdag- en donderdagochtend.
  </div>
</template>

<script>
export default {
  name: 'vol',
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  div[section="full"] {
    max-width: 600px;
    margin: 0 auto 0 auto;
  }
</style>
