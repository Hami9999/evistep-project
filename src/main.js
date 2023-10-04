import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import store from "./store/index.js";
 import './axios';
createApp(App).use(router).use(store).mount('#app')
