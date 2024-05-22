<template>
  <div>
    <img v-on:click="modalOpen(product.image, product.content);" :src="product.image" class="room-img">

    <h3> {{ product.title }}</h3>
    <p> {{ product.price }} 만원 </p>
    <button v-on:click="increaseReports(key)">허위매물신고</button>
    <br><span>신고수 : {{ 신고수[key] }}</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      신고수: [0, 0, 0],
    };
  },
  props:{
    product: Object,
    key: Number
  },
  methods: {
    increaseReports(index) {
      this.신고수[index] += 1;
    },
    modalOpen(img, content) {
      this.modalImg = img;
      this.modalContent = content;
      this.isModalOpen = true;
    }
  }
}
</script>

<style scoped>
.room-img {
  width: 20%;
  margin-top: 40px;
}
</style>