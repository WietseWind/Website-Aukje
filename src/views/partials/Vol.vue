<template>
  <div section="full" class="alert alert-warning px-3 py-2 mt-3 text-center">
    Let op! De <b>dinsdag</b><u>ochtend</u> en <b>volledige donderdag</b> zitten vol. Op dinsdagmiddag is nog beperkt ruimte.
    <b>Op de andere dagen zijn er nog plekken beschikbaar in zowel de ochtend als de middag.</b>
    <br />
    <small>Je kunt altijd informeren naar een plekje op de wachtlijst voor de dinsdagochtend en donderdag.</small>
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
