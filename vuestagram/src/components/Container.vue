<script>
import Post from "@/components/Post.vue";

export default {
  name: "Contatiner",
  components: {Post},

  props: {
    posts: Array
  }
}
</script>

<template>
  <div>
    <Post v-for="(post, index) in posts" :key="index" :post="post" />
  </div>
</template>

<style scoped>

</style>