const posts = state => state.posts           // Массив новостей Reddit
const loading = state => state.postsLoading  // Состояние закрузки

export default{
  posts,
  loading
}
