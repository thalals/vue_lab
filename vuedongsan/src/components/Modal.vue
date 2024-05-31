<template>
  <div class="black-bg" v-if="isModalOpen">
    <div class="white-bg">
      <img :src="modalImg"/>
      <p>{{ modalContent }}</p>

      <p> {{ month }}개월 선택함 : </p>
      <!-- 방법 1: js eventListener 사용자 입력값 변수  -->
      <input @input="month = $event.target.value">
      <!-- 방법 2     -->
      <input v-model.number="month">

      <button @click="$emit('modalClose')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data() {
    return {
      month: 1,
      totalPrice: 0,

    }
  },
  // 데이터 감시자 - data 변경시 마다 해당 함수가 실행
  watch : {
    //변수명과 함수명을 동일하게
    month(input) {
      if (isNaN(input) || input >= 13 || input < 1) {
        alert("1~12까지 숫자를 입력해주세요" )
      }
    }
  },


  //부모로 받아온 데이터를 수신 및 정의
  // 변수명 : 자료형
  props: {
    원룸들 : Array,
    isModalOpen : Boolean,
    modalImg : String,
    modalContent : String,
  },

  methods:{}
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