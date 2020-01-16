<template>
  <div id="app" class="container">
    <div id="nav" class="flex-wrap">
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'home', 'btn-primary': $router.currentRoute.name === 'home' }" to="/">Home</router-link>
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'visie', 'btn-primary': $router.currentRoute.name === 'visie' }" to="/visie">Visie</router-link>
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'werkwijze', 'btn-primary': $router.currentRoute.name === 'werkwijze' }" to="/werkwijze">Werkwijze</router-link>
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'over-mij', 'btn-primary': $router.currentRoute.name === 'over-mij' }" to="/over-mij">Over mij</router-link>
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'wandelvoorwaarden', 'btn-primary': $router.currentRoute.name === 'wandelvoorwaarden' }" to="/wandelvoorwaarden">Wandelvoorwaarden</router-link>
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'tarieven', 'btn-primary': $router.currentRoute.name === 'tarieven' }" to="/tarieven">Tarieven</router-link>
      <router-link class="btn mx-1 my-1" :class="{ 'btn-outline-primary': $router.currentRoute.name !== 'contact', 'btn-primary': $router.currentRoute.name === 'contact' }" to="/contact">Contact</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }
</style>
