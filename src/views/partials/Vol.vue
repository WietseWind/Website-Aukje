<template>
  <div section="full" class="alert alert-warning px-3 py-2 mt-3 text-center">
    Let op! <b>Ik zit momenteel vol</b>.
    Er zijn geen plekken meer beschikbaar. Wanneer er weer plek beschikbaar komt zal ik dit op mijn website bijwerken.
    <br />
    Je kunt altijd informeren naar een plekje op de wachtlijst.
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
