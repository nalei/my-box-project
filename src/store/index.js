import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    posts: [],          // Массив новостей Reddit
    postsLoading: true  // Состояние закрузки
  },
  actions,
  mutations,
  getters
})

export default store