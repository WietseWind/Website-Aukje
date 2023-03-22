<template>
  <div section="full" class="alert alert-warning px-3 py-2 mt-3 text-center">
    Alle dagen zitten momenteel <b>vol</b>.
    We hebben een <b>wachtlijst</b>. Om je vrijblijvend aan te melden op de wachtlijst kun je
    <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSct_IpcN59OuOSbgsmzjJcDF3YnNI438fG_NkxTZX1pF0c0sw/viewform">dit formulier</a>
    invullen.
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
