import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/homepage/homepage.vue')
const Forum = () => import('../views/forum/forum_index.vue')
const Person = () => import('../views/person/person.vue')

//1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [
  {
    path: '',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home
  },
  {
    path: '/Forum',
    component: Forum
  },
  {
    path: '/Person',
    component: Person
  }
]
const router = new VueRouter({
  routes,
  mode: 'hash'
})

export default router
