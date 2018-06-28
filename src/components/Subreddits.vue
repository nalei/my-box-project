<template>
  <div class="subreddit-list">
    <Subreddit class="subreddit" v-for="tutorial in tutorials" :item="tutorial" :key="tutorial.title" />
  </div>
</template>

<script>
import Subreddit from './Subreddit'
 
export default {
  name: 'Subreddits',
  components: { Subreddit },
  props: ['tutorials']
}
</script>
 
<style scoped>
  .subreddit-list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
  }
 
  .subreddit {
    padding: 20px;
  }
 
  @media only screen and (min-width: 600px) {
    .subreddit {
      width: 50%;
    }
  }
</style>