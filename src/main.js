import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/font/font.css"
import { Tabbar, TabbarItem } from 'vant'
import '../src/assets/styles/res.css'
const app = createApp(App)

app.use(Tabbar)
app.use(TabbarItem)

import { Switch } from 'vant'
app.use(Switch)

import { DatePicker } from 'vant'
app.use(DatePicker)

import { Field, CellGroup } from 'vant'
app.use(Field)
app.use(CellGroup)

import router from './router'
app.use(router)
import {Cascader} from 'vant'
app.use(Cascader)
app.mount('#app')


