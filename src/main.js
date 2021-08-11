import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag-next";
import './index.scss'

createApp(App).use(VueGtag, {
  property: { 
    id: "UA-3450196-6",
  }
}).mount("#app");