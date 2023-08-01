import { createApp } from 'vue'
import Personinfo from '../src/components/personifo/personinfo.vue'
import '../src/assets/font/font.css'
createApp(Personinfo).mount('#app')
import { Tabbar, TabbarItem } from 'vant'
Vue.use(Tabbar).use(TabbarItem)
import { Image as VanImage, Lazyload  } from 'vant'
Vue.use(VanImage).use(Lazyload)
