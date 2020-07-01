<template>
  <div class="home">
    <h2 class="mt-3">Uitlaatservice</h2>
    <h5 class="">Zeist en omstreken</h5>
    <h2 class=""><strong><q>De Zesvoeter II</q></strong></h2>
    <h4><router-link class="" to="/over-mij">Nick Reinhard</router-link></h4>
    <div class="pt-3 row">
      <div class="col-12 text-center pl-1">
        <a id="mail" class="btn btn-md btn-primary" v-if="dmail">
          Contact per <i class="far fa-envelope"></i> e-mail
        </a>
      </div>
      <Vol />
    </div>
    <br />
    <div class="row">
      <div class="col-1"></div>
      <div class="col-10">
        <img alt="De Zesvoeter II" src="../assets/nick-de-zesvoeter-ii.jpeg" class="img-thumbnail responsive img-responsive rounded nick mb-5">
      </div>
    </div>
  </div>
</template>

<script>
import Vol from './partials/Vol'

export default {
  name: 'home',
  components: {
    Vol
  },
  data () {
    return {
      dmail: true
    }
  },
  mounted () {
    document.querySelector('#mail').setAttribute('href', 'mailto:aukje+nick' + '@' + 'wind.cd')
  }
}
</script>

<style lang="scss" scoped>
  img.nick {
    max-height: 60vh;
    // max-width: 80vw;
  }
</style>
