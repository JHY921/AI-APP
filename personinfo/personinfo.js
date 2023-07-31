import { createApp } from 'vue'
import Personinfo from '../src/page/personifo/personinfo.vue'
import '../src/assets/font/font.css'
createApp(Personinfo).mount('#app')
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)
