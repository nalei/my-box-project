<template>  
  <div class="container">

    <div class="text-center" v-show="loading">
        Loading...
    </div>

    <Pagination v-model="page" :items="posts.length" :perPage="10" />
    <Postlist :page="page" :posts="pageOfPosts" /> <!-- Биндим только часть массива, для пагинации -->
    <Pagination v-model="page" :items="posts.length" :perPage="10" />

  </div>
</template>

<script>
import Postlist from './Postlist'
import Pagination from './Pagination'
import getArraySection from '@/utilities/get-array-section'
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Reddit',
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