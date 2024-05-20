<template>

  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>

  <!-- 모달창 -->
  <div class="black-bg" v-if="isModalOpen" v-on:click="modalClose()">
    <div class="white-bg">
      <p>dfdd</p>
    </div>
  </div>

  <main>
    <div class="products" v-for="(product, index) in products" :key="index">
      <img v-on:click="modalOpen();" src="./assets/logo.svg" class="room-img">
      <h3> {{ product }}</h3>
      <p> {{ prices[index] }} 만원 </p>
      <button v-on:click="increaseReports(index)">허위매물신고</button>
      <span>신고수 : {{ 신고수[index] }}</span>
    </div>

  </main>

</template>

<script>
//데이터 선언
export default {
  name: 'App',
  data() {
    return {
      prices: [60, 70, 80],
      css_color_style: 'color : blue',
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      menus: ['Home', 'Shop', 'About'],
      신고수: [0, 0, 0],
      isModalOpen : false
    }
  },

  methods: {
    increaseReports(index) {
      this.신고수[index] += 1;
    },
    modalOpen() {
      this.isModalOpen = true;
    },
    modalClose() {
      this.isModalOpen = false;
    }
  }

}

</script>

<style scoped>
div{
  box-sizing: border-box;
  text-align: center;
}

.menu {
  background: bisque;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  padding: 10px;
}

.room-img {
  width: 20%;
  margin-top: 40px;
}

.black-bg{
  width: 50%;
  background: #181818;
  position: fixed;
  padding: 20px;
}

.white-bg{
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
