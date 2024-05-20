<script setup>
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <div>
      <!--  데이터 바인딩 1   -->
      <h3 :style="css_color_style"> xx 원룸</h3>
      <!--  데이터 바인딩 2   -->
      <p> {{ price1 }} 만원 </p>
    </div>
    <div>
      <h3> {{ products[0] }}</h3>
      <p> {{ price2 }} 만원 </p>
    </div>
    <div>
      <h3> {{ products[1] }}</h3>
      <p> {{ price2 }} 만원 </p>
    </div>
  </main>
</template>

<script>

  //데이터 선언
  export default {
    name: 'App',
    data(){
      return {
        price1 : 60,
        price2 : 75,
        css_color_style : 'color : blue',
        products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸']
      }
    }
  }

</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
