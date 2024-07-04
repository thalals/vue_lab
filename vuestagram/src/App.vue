<script>
import Container from "@/components/Container.vue";
import {mapActions, mapMutations, mapState} from "vuex";

export default{
  name: "app",
  components:{Container},

  data() {
    return {
      imageUploadUrl: "",
      postWrite: ""
    };
  },

  // vuex mapState
  computed: {
    // vuex state 변수
    ...mapState(["posts", "step", "likes"]),
    ...mapState({ 게시물들 : "posts"}),
  },

  methods: {
    //vuex mapMutations
    ...mapMutations(['publish', 'setStep']),
    ...mapActions(['more']),

    upload(e) {
      let files = e.target.files;
      this.imageUploadUrl = URL.createObjectURL(files[0]);
      console.log(this.imageUploadUrl);

      //use mapMutation
      setStep(1);

    },

    publish() {
      var newPost = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.imageUploadUrl,
        likes: 0,
        date: "May 15",
        liked: false,
        content: this.postWrite,
        filter: "perpetua"
      };
      this.$store.commit("publish", newPost);
      this.$store.commit("setStep", 0);
    },

    write(write) {
      this.postWrite = write;
    },
  }
}

</script>

<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="$store.state.step == 1" @click="$store.commit('setStep', 2)">Next</li>
      <li v-if="$store.state.step == 2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>


  <Container @write="write" :imageUploadUrl="imageUploadUrl"/>
<!--  <button @click="$store.dispatch('more')">더보기</button>-->
  <button @click='more'>더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<style scoped>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
