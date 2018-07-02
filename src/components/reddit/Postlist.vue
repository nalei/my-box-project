<template>
  <transition name="fade" mode="out-in">
    <div class="post-list" :key="page">
      <Post class="post" v-for="post in posts" :item="post.data" :key="post.id" />
    </div>
  </transition>
</template>

<script>
import Post from './Post'
 
export default {
  name: 'Postlist',
  components: { Post },
  props: ['page', 'posts']
}
</script>
 
<style>
  .post {
    padding: 20px;
  }
  @media (min-width: 768px) {
    .post {
      padding: 20px 0;
    }
  }
  .fade-enter-active, .fade-leave-active {
      transition: all .15s ease;
  }
  .fade-enter, .fade-leave-active {
      opacity: 0;
  }
</style>
