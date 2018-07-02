<template>
  <main>
    <div class="header clearfix text-center">
      <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>	
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="row">
            <ul class="nav navbar-nav">
              <router-link tag="li" to="/" exact><a>Фрактал Julia</a></router-link>
              <router-link tag="li" to="/Reddit" exact><a>Reddit здесь!</a></router-link>
            </ul>
          </div><!-- /.row -->
        </div><!-- /.container -->
      </nav>
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
  .navbar {
    min-height: 41px;
  }
  .navbar-nav { 
    margin: 0 -15px;
  }
  @media (min-width: 768px) {
    .navbar-nav > li > a {
        padding-top: 10px;
        padding-bottom: 9px;
    }
  }
</style>
