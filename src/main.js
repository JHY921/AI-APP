import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

import "../src/assets/font/font.css"
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)

