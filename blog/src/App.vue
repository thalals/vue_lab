<script>
//component
import List from './components/List.vue'
//data
import Articles from './assets/blog.js'

export default {
  name: 'App',
  data() {
    return {
      articles: Articles,
    }
  },
  components:{
    List: List,
  }
}

</script>

<template>
  <div class="container mt-4">
    <h5> 개발 블로그 입니다</h5>
    <p> - Vue 로 만들었음 - </p>
  </div>

  <List :articles="articles"></List>

</template>

<style>
#app{
  text-align: center;
}

</style>
