<template>
  <div class="subreddit-list">
    <Subreddit class="subreddit" v-for="post in posts" :item="post.data" :key="post.id" />
  </div>
</template>

<script>
import Subreddit from './Subreddit'
 
export default {
  name: 'Subreddits',
  components: { Subreddit },
  props: ['posts']
}
</script>
 
<style>
  /* .subreddit-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  } */
  .subreddit {
    padding: 20px;
  }

</style>