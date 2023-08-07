import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/font/font.css"
import { Tabbar, TabbarItem } from 'vant'
import '../src/assets/styles/res.css'
const app = createApp(App)
app.use(Tabbar)
app.use(TabbarItem)

import router from './router'
app.use(router)
app.mount('#app')


