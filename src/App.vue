<template>
  <main  class="container">
    <div class="header clearfix text-center">
      <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>
    </div>

    <div class="text-center" v-show="loading">
        Loading...
    </div>

    <Pagination v-model="page" :items="posts.length" :perPage="10" />
    <Postlist :page="page" :posts="pageOfPosts" /> <!-- Биндим только часть массива, для пагинации -->
    <Pagination v-model="page" :items="posts.length" :perPage="10" />

  </main>
</template>

<script>
import Postlist from './components/Postlist'
import Pagination from './components/Pagination'
import getArraySection from './utilities/get-array-section'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'app',
  components: { Postlist, Pagination },
  data () {
    return { 
      subReddit: 'all', // Категория новостей Reddit
      page: 1           // Начальная страница, для пагинации
    } 
  },
  methods: {
    ...mapActions({
      fetchItems: 'FETCH_ITEMS' // Запрос новостей Reddit
    })
  },
  computed: {
    ...mapGetters({
      'posts': 'posts',    // Массив новостей Reddit
      'loading': 'loading' // Состояние закрузки
    }),

    // Возвращает часть массива, для пагинации
    pageOfPosts () {
      return getArraySection(this.posts, this.page, 10)  //ToDo: Перенести пагинацию в VUEX
    }
  },
  created () {
    // Получает топ 30 новостей Reddit, и записывает в posts
    // subReddit == 'all'
    this.fetchItems(this.subReddit)
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
