<template>
  <div>
    <!-- 부모에게 이벤트 메세지 전달 "$emit('이벤트명', 전송할 데이터)"   -->
    <img v-on:click="$emit('openModal', index)" :src="product.image" class="room-img">

    <h3> {{ product.title }}</h3>
    <p> {{ product.price }} 만원 </p>
    <button v-on:click="increaseReports(index)">허위매물신고</button>
    <br><span>신고수 : {{ 신고수[index] }}</span>
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
    index: Number
  },
  methods: {
    increaseReports(index) {
      this.신고수[index] += 1;
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