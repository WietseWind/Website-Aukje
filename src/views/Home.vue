<template>
  <div class="home">
    <h2 class="mt-3">Uitlaatservice</h2>
    <h5 class="">Zeist en omstreken</h5>
    <h2 class=""><strong><q>De Zesvoeter</q></strong></h2>
    <h4><router-link class="" to="/over-mij">Aukje Wind</router-link></h4>
    <div class="pt-3 row">
      <div class="col-6 text-right pr-1">
        <a href="https://wa.me/31648077493" class="btn btn-md btn-success">
          Contact via <i class="fab fa-whatsapp"></i> WhatsApp
        </a>
      </div>
      <div class="col-6 text-left pl-1">
        <a id="mail" class="btn btn-md btn-primary" v-if="dmail">
          Contact per <i class="far fa-envelope"></i> e-mail
        </a>
      </div>
    </div>
    <br />
    <img alt="De Zesvoeter" src="../assets/aukje-de-zesvoeter.jpeg" class="img-thumbnail rounded aukje mb-5">
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      dmail: true
    }
  },
  mounted () {
    document.querySelector('#mail').setAttribute('href', 'mailto:aukje' + '@' + 'wind.cd')
  }
}
</script>

<style lang="scss" scoped>
  img.aukje {
    max-height: 60vh;
    max-width: 80vw;
  }
</style>
