<template>

  <div class="menu">
    <a v-for="(menu, index) in menus" :key="index">{{ menu }}</a>
  </div>

  <button @click="priceSort">가격순 정렬</button>
  <button @click="sortBack">되돌리기</button>

  <!-- Component  -->
  <Discount></Discount>

  <Transition name="fade">     <!-- 모달창 -->
    <Modal @modalClose="modalClose" :원룸들="원룸들" :isModalOpen="isModalOpen" :modalImg="modalImg" :modalContent="modalContent"/>
  </Transition>


  <!-- 상품 Component  -->
  <Card @openModal="modalOpen(product.image, product.content)" v-for="(product, index) in 원룸들" :key="index" :product="product" :index="index"/>


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
      isModalOpen: false,

      // Import, export 데이터
      원룸들: data,
      원룸들오리지널: [...data]  //[...복사할데이터]
    }
  },

  methods: {
    modalOpen(img, content) {
      this.modalImg = img;
      this.modalContent = content;
      this.isModalOpen = true;
    },
    modalClose() {
      this.isModalOpen = false;
    },
    priceSort() {
      this.원룸들.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    sortBack() {
      this.원룸들 = [...this.원룸들오리지널];
    },
  }

}

</script>

<style>
.fade-enter-form{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}

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
