<template>
  <main  class="container">
    <div class="header clearfix text-center">
      <h2><img src="./assets/logo.png" width=35> Тестовое задание frontend разработчика</h2>
    </div>

    <Pagination v-model="page" :items="tutorials.length" :perPage="10" />
    <Subreddits :tutorials="pageOfTutorials" />
    <Pagination v-model="page" :items="tutorials.length" :perPage="10" />

  </main>
</template>

<script>
import Subreddits from './components/Subreddits'
import Pagination from './components/Pagination'
import getArraySection from './utilities/get-array-section'
import { tutorials as tutorialData } from './data'

export default {
  name: 'app',
  components: { Subreddits, Pagination },
  data () {
    return { 
      // Массив новостей Reddit
      tutorials: [],
      // Начальная страница, для пагинации
      page: 1
    }
  },
  computed: {
    // Возвращает часть массива, для пагинации
    pageOfTutorials () {
      return getArraySection(this.tutorials, this.page, 10)
    }
  },
  methods: {
    getTutorials () {
      // ToDo: запрос списка новостей Reddit
      this.tutorials = tutorialData
    }
  },
  created () {
    this.getTutorials()
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
