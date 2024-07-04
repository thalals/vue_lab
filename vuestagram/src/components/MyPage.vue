<script setup>
import {onMounted, ref} from "vue";
import axios from "axios";
import {mapState, useStore} from "vuex";

let followers = ref([]);

onMounted(() => {
  axios.get('/followers.json')
      .then((e) => {
        followers.value = e.data;
      });
});

//composition api props 예제
const props = defineProps({
  one: String,
  two: Number
});

//vuex store 사용하기
let store = useStore();

defineExpose({});
</script>


<template>
  <div style="padding : 10px">
    <h4>팔로워</h4>
    <input placeholder="?️"/>
    <div v-for="(follower, index) in followers" key="index" class="post-header">
      <div class="profile" :style="`background-image:url(${follower.image})`"></div>
      <span class="profile-name">{{ follower.name }}</span>
    </div>
  </div>
</template>

<style>

</style>