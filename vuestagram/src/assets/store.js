import {createStore} from "vuex";
import data from "@/assets/data.js";
import axios from "axios";

const store = createStore({
    state() {
        return {
            posts: data,
            moreCount: 0,
            step: 0,  //페이지 선택 변수
            likes: 30,

        };
    },

    mutations: {
        like(state) {
            if (!state.isLiked) {
                state.likes++;
                state.isLiked = true;
                return;
            }
            state.likes--;
            state.isLiked = false;
        },

        addPost(state, post) {
            state.posts.push(post)
        },
        addMoreCount(state) {
            state.moreCount++;
        },
        publish(state, post) {
            state.posts.unshift(post);
        },
        setStep(state, stepCount) {
            state.step = stepCount;
        },
    },

    // api 호출
    actions:{
        more(context) {
            axios
                .get(`https://codingapple1.github.io/vue/more${context.state.moreCount}.json`)
                .then((result) => {
                    context.commit("addPost", result.data);
                    context.commit("addMoreCount");
                })
                .catch((err) => {
                    alert(err);
                });
        },
    },

});

export default store;