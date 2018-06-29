<template>
  <div class="media">
    <div class="media-left">
      <a :href="item.url">
        <img class="media-object" :src="item.thumbnail">
      </a>
    </div>
    <div class="media-body">
      <p class="meta">
        Published
        <span class="meta-bit">{{ timeConverter(item.created) }}</span>
        at
        <span class="meta-bit">{{ item.domain }}</span>
      </p>
      <h4><a :href="item.url" target="_blank">{{ item.title }}</a></h4>
      <p class="stats">
        <i class="glyphicon glyphicon-thumbs-up"></i>
        <span>{{item.score}}</span>
        <i class="glyphicon glyphicon-comment"></i>
        <span>{{item.num_comments}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import timeConverter from '../utilities/time-converter'

export default {
  name: 'Post',
  props: ['item'],
  methods: {
    timeConverter  // Преобразовывает UNIX в читаемый формат даты
  }
}
</script>

<style>
  .meta {
    color: #777;
    font-size: .85em;
  }
  .meta-bit {
    color: #333;
    font-weight: bold;
  }
  .stats {
    color: #777;
    font-size: .9em;
  }
  .stats span {
    color: #333;
    margin-right: 10px;
  }
</style>