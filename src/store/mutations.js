export default {

  SET_ITEMS: (state, items) => {
    state.posts = items
    state.postsLoading = false
  }

}
