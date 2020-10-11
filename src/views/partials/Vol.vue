<template>
  <div section="full" class="alert alert-warning px-3 py-2 mt-3 text-center">
    Let op! De maandag, dinsdag &amp; donderdag zitten momenteel <b>vol</b>.
    Enkel op <b>woensdag</b> en <b>vrijdag</b> zijn nog enkele plekken <b>beschikbaar</b>.
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
