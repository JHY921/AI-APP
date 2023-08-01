import { createApp } from 'vue'
import Person from './person.vue'
import '../src/assets/font/font.css'
createApp(Person).mount('#app')
import { Image as VanImage, Lazyload  } from 'vant'
Vue.use(VanImage).use(Lazyload)