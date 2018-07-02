<template>
  <main>
    <div class="container">
      <div class="header clearfix text-center">
        <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>
      </div>
    </div><!-- /.container -->
    <nav class="navbar navbar-default">
      <div class="container">
        <ul class="nav navbar-nav text-center">
          <router-link tag="li" to="/" exact><a>Фрактал Julia</a></router-link>
          <router-link tag="li" to="/Reddit" exact><a>Reddit здесь!</a></router-link>
        </ul>
      </div><!-- /.container -->
    </nav>
    
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
  .header h2{
    margin-top: 20px;
    margin-top: 20px;
  }
  .navbar {
    min-height: 41px;
  }
  .navbar-nav { 
    margin: 0 -15px;
  }
  .navbar-nav > li {
    float: left;
    width: 50%;
  }
  .navbar-nav > li > a {
    padding-top: 10px !important;
    padding-bottom: 9px !important;
  }
  @media (min-width: 768px) {
    .navbar-nav > li {
      width: auto;
    }
    .navbar-nav > li > a {
      padding-top: 10px !important;
      padding-bottom: 9px !important;
    }
  }
</style>
