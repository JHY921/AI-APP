import { createApp } from 'vue'
import Personinfo from '../src/components/personifo/personinfo.vue'
import '../src/assets/font/font.css'
createApp(Personinfo).mount('#app')
import { Tabbar, TabbarItem } from 'vant'
import { Image as VanImage, Lazyload  } from 'vant'
const app =createApp()
app.use(VanImage).use(Lazyload).use(Tabbar).use(TabbarItem)
