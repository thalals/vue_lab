import { createApp } from 'vue'
import App from './App.vue'
import store from "@/assets/store.js";

createApp(App)
    .use(store)
    .mount('#app')
