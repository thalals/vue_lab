<template>
  <div class="black-bg" v-if="isModalOpen" v-on:click="modalClose()">
    <div class="white-bg">
      <img :src="modalImg"/>
      <p>{{ modalContent }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  //부모로 받아온 데이터를 수신 및 정의
  // 변수명 : 자료형
  props: {
    원룸들 : Array,
    isModalOpen : Boolean,
    modalImg : String,
    modalContent : String,
  },

  methods:{
    modalClose() {
      this.isModalOpen = false;
    }
  }
};
</script>

<style>
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