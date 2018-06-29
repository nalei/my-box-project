export default {

  SET_ITEMS: (state, items) => {
    state.posts = state.posts.concat(items)
    state.postsLoading = false
  }

}
