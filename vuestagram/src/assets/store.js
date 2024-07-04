import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            likes: 30,
            isLiked: false,

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
    },
});

export default store;