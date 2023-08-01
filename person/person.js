import { createApp } from 'vue'
import Person from '../src/components/person/person.vue'
import '../src/assets/font/font.css'
createApp(Person).mount('#app')
import { Image as VanImage, Lazyload  } from 'vant'
const app =createApp()
app.use(VanImage).use(Lazyload)