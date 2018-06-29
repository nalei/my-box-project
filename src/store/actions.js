import {api} from '../api/create-api'

export default {

  FETCH_ITEMS: ({commit}, subReddit) => {
    var url = 'r/'+ subReddit +'/top.json?limit=30&count=30' //ToDo: Обрабатывать параметры
    // ToDo: Кешировать запросы
    api.get(url)
    .then(response => {
      let items = response.data.data.children
      commit('SET_ITEMS', items)
    })
    .catch(error => {
      console.log(error)
    })
  }

}
