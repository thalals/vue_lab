<template>

  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>

  <!-- Component  -->
  <Discount></Discount>

  <!-- 모달창 -->
  <div class="black-bg" v-if="isModalOpen" v-on:click="modalClose()">
    <div class="white-bg">
      <img :src="modalImg"/>
      <p>{{ modalContent }}</p>
    </div>
  </div>

  <div class="products" v-for="(product, index) in 원룸들" :key="index">
    <img v-on:click="modalOpen(product.image, product.content);" :src="product.image" class="room-img">

    <h3> {{ product.title }}</h3>
    <p> {{ product.price }} 만원 </p>
    <button v-on:click="increaseReports(index)">허위매물신고</button>
    <br><span>신고수 : {{ 신고수[index] }}</span>
  </div>


</template>

<script>
import data from './assets/data.js'
import Discount from "@/components/Discount.vue";

//데이터 선언
export default {
  name: 'App',
  components: {Discount},

  data() {
    return {
      prices: [60, 70, 80],
      css_color_style: 'color : blue',
      products: ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      menus: ['Home', 'Shop', 'About'],
      신고수: [0, 0, 0],

      // 모달 데이터
      modalImg: "",
      modalContent: "",
      isModalOpen: false,

      // Import, export 데이터
      원룸들: data
    }
  },

  methods: {
    increaseReports(index) {
      this.신고수[index] += 1;
    },
    modalOpen(img, content) {
      this.modalImg = img;
      this.modalContent = content;
      this.isModalOpen = true;
    },
    modalClose() {
      this.isModalOpen = false;
    }
  }

}

</script>

<style scoped>
div {
  box-sizing: border-box;
  text-align: center;
}

.menu {
  background: bisque;
  width: 100%;
  height: 5%;
  padding: 15px;
  border-radius: 10px;
}

.menu a {
  padding: 10px;
}

.discount{
  background: lightgrey;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.room-img {
  width: 20%;
  margin-top: 40px;
}

.black-bg {
  width: 80%;
  background: #181818;
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

</style>
