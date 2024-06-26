<script>
export default {
  name: "List",
  props:{
    articles: Array,
  },

}
</script>

<template>
  <div v-for="(article, index) in articles" :key="index">
    <h5> {{ article.title }} </h5>
    <p> {{ article.content }} </p>
    <p> {{ article.date }} </p>
  </div>
</template>

<style>

</style>