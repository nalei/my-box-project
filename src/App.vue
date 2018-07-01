<template>
  <main  class="container">
    <div class="header clearfix text-center">
      <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>
    </div>
    
    <router-view></router-view>

  </main>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  main {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .container {
    max-width: 750px;
  }
  h1, h2 {
    font-weight: normal;
  }
  .header {
    margin: 10px 0 20px;
  }
</style>
