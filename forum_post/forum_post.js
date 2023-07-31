import { createApp } from 'vue'

import Forum_post from '../src/components/forum/post.vue'
import '../src/assets/font/font.css'
createApp(Forum_post).mount('#app')

import { NavBar } from 'vant'
const app = createApp()
app.use(NavBar)

import { ActionBar, ActionBarIcon, ActionBarButton } from 'vant'
const act = createApp()
act.use(ActionBar)
act.use(ActionBarIcon)
act.use(ActionBarButton)


import { Icon } from 'vant'
const icon = createApp()
icon.use(Icon)