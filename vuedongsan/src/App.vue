<template>

  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>

  <!-- Component  -->
  <Discount></Discount>

  <!-- 모달창 -->
  <Modal :원룸들="원룸들" :isModalOpen="isModalOpen" :modalImg="modalImg" :modalContent="modalContent"/>

  <!-- 상품 Component  -->
  <Card v-for="(product, index) in 원룸들" :key="index" :product="product" />


</template>

<script>
import data from './assets/data.js'
import Discount from "@/components/Discount.vue";
import Modal from "@/components/Modal.vue";
import Card from "@/components/Card.vue";

//데이터 선언
export default {
  name: 'App',
  components: {Modal, Discount, Card},

  data() {
    return {
      menus: ['Home', 'Shop', 'About'],

      // 모달 데이터
      modalImg: "",
      modalContent: "",
      isModalOpen: false,

      // Import, export 데이터
      원룸들: data
    }
  },

  methods: {
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

</style>
