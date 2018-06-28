<template>
  <main  class="container">
    <div class="header clearfix text-center">
      <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>
    </div>

    <Pagination v-model="page" :items="posts.length" :perPage="10" />
    <Subreddits :posts="pageOfPosts" />
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
      // Массив новостей Reddit
      posts: [],
      // Начальная страница, для пагинации
      page: 1
    }
  },
  computed: {
    // Возвращает часть массива, для пагинации
    pageOfPosts () {
      return getArraySection(this.posts, this.page, 10)
    }
  },
  methods: {
    getPosts () {
      var url = 'https://www.reddit.com/r/all/top.json?limit=30&count=30'
      axios.get(url)
        .then(response => {
          this.posts = this.posts.concat(response.data.data.children)
        })
        .catch(error => {
          console.log(error)
        })
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
</style>
