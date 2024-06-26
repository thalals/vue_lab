<script>
export default {
  name: "Detail",
  data() {
    return{
    };
  },
  props:{
    articles: Array,
  }
}
</script>

<template>

  <div>
    <h5> {{ articles[$route.params.id].title }} </h5>
    <p> {{ articles[$route.params.id].content }} </p>
    <p> {{ articles[$route.params.id].date }} </p>
  </div>
</template>

<style>

</style>