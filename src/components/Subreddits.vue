<template>
  <transition name="fade" mode="out-in">
    <div class="subreddit-list" :key="page">
      <Subreddit class="subreddit" v-for="post in posts" :item="post.data" :key="post.id" />
    </div>
  </transition>
</template>

<script>
import Subreddit from './Subreddit'
 
export default {
  name: 'Subreddits',
  components: { Subreddit },
  props: ['page', 'posts']
}
</script>
 
<style>
  .subreddit {
    padding: 20px;
  }
  .fade-enter-active, .fade-leave-active {
      transition: all .15s ease;
  }
  .fade-enter, .fade-leave-active {
      opacity: 0;
  }
</style>
