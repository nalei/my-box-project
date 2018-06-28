<template>
  <main  class="container">
    <div class="header clearfix text-center">
      <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>
    </div>

    <div class="text-center" v-show="postsLoading">
        Loading...
    </div>

    <Pagination v-model="page" :items="posts.length" :perPage="10" />
    <Subreddits :page="page" :posts="pageOfPosts" /> <!-- Биндим только часть массива, для пагинации -->
    <Pagination v-model="page" :items="posts.length" :perPage="10" />

  </main>
</template>

<script>
import axios from 'axios'
import Subreddits from './components/Subreddits'
import Pagination from './components/Pagination'
import getArraySection from './utilities/get-array-section'

export default {
  name: 'app',
  components: { Subreddits, Pagination },
  data () {
    return {
      posts: [],  // Массив новостей Reddit
      subReddit: 'all',  // Категория новостей Reddit
      page: 1,  // Начальная страница, для пагинации
      postsLoading: false // Состояние закрузки
    } 
  },
  methods: {
    // Получает топ 30 новостей Reddit, и записывает в posts
    // ToDo: Вынести работу с API в отдельный класс
    // ToDo: Кешировать запросы
    getPosts () {
      this.postsLoading = true
      var url = 'https://www.reddit.com/r/'+ this.subReddit +'/top.json?limit=30&count=30'
      axios.get(url)
        .then(response => {
          this.posts = this.posts.concat(response.data.data.children)
          this.postsLoading = false
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    // Возвращает часть массива, для пагинации
    pageOfPosts () {
      return getArraySection(this.posts, this.page, 10)
    }
  },
  created () {
    this.getPosts()
  }
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
  .fade-enter-active, .fade-leave-active {
      transition: all .2s ease;
  }
  .fade-enter, .fade-leave-active {
      opacity: 0;
  }
</style>
