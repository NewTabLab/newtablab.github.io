import { createApp } from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";
import './index.scss'

createApp(App).use(VueGtag, {
  config: { 
    id: "UA-3450196-6",
    params: {
      anonymize_ip: true
    }
  }
}).mount("#app");