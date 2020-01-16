<template>
  <div class="home">
    <h2 class="mt-3">Uitlaatservice</h2>
    <h5 class="">Zeist en omstreken</h5>
    <h2 class=""><strong><q>De Zesvoeter</q></strong></h2>
    <h4><router-link class="" to="/over-mij">Aukje Wind</router-link></h4>
    <p class="pt-3">
      <a href="https://wa.me/31648077493" class="btn btn-md btn-success">
        Contact via <i class="fab fa-whatsapp"></i> WhatsApp
      </a>
    </p>
    <br />
    <img alt="De Zesvoeter" src="../assets/aukje-de-zesvoeter.jpeg" class="img-thumbnail rounded aukje mb-5">
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss" scoped>
  img.aukje {
    max-height: 60vh;
    max-width: 80vw;
  }
</style>
