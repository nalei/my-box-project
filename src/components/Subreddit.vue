<template>
  <div>
    <h4><a :href="item.url">{{ item.title }}</a></h4>
    <p class="meta">
      Published
      <span class="meta-bit">{{ item.datePublished }}</span>
      at
      <span class="meta-bit">{{ domainOf(item.url) }}</span>
    </p>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
let parser = document.createElement('a')

export default {
  name: 'Subreddit',
  props: ['item'],
  methods: {
    domainOf: url => ((parser.href = url), parser.hostname.replace(/^www\./, ''))
  }
}
</script>

<style scoped>
  .meta {
    color: #777;
    font-size: .85em;
  }
  .meta-bit {
    color: #333;
    font-weight: bold;
  }
</style>