<script setup>
</script>

<template>

  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>

  <main>
    <div v-for="(product, index) in products" :key="index">
      <h3> {{ product }}</h3>
      <p> {{ prices[index] }} 만원 </p>
    </div>
  </main>
</template>

<script>

  //데이터 선언
  export default {
    name: 'App',
    data(){
      return {
        prices : [60,70,80],
        css_color_style : 'color : blue',
        products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        menus : ['Home', 'Shop', 'About']
      }
    }
  }

</script>

<style scoped>
.menu {
  text-align: center;
  background: bisque;
  padding: 15px;
  border-radius: 10px;
}

.menu a{
  padding: 10px;
}

</style>
