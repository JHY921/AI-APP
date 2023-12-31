import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/font/font.css"
import { Tabbar, TabbarItem } from 'vant'
import '../src/assets/styles/res.css'
const app = createApp(App)

import { Tab, Tabs } from 'vant'
app.use(Tab)
app.use(Tabs)

app.use(Tabbar)
app.use(TabbarItem)

import { Switch } from 'vant'
app.use(Switch)

import { Picker } from 'vant'
app.use(Picker)

import { Popup } from 'vant'
app.use(Popup)

import { DatePicker } from 'vant'
app.use(DatePicker)

import { Field, CellGroup } from 'vant'
app.use(Field)
app.use(CellGroup)

import { NavBar } from 'vant'
app.use(NavBar)

import { Toast } from 'vant'
app.use(Toast)

//const api = '39.106.71.161:5000'
const api = 'localhost:5000'
app.provide('$api', api)


import router from './router'
app.use(router)

import { Cascader } from 'vant'
//import store from './store'
app.use(Cascader)

import { Overlay } from 'vant'
app.use(Overlay)

import { Swipe, SwipeItem } from "vant"
app.use(Swipe).use(SwipeItem)

app.mount('#app')


