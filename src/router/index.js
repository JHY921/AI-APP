import { createRouter, createWebHashHistory } from 'vue-router'

const login = () => import('../views/register/login.vue')
const userinfor = () => import('../views/register/userinfo.vue')

const tabbar = () => import('../components/tabbar.vue')

const Home = () => import('../views/homepage/homepage.vue')

const Forum = () => import('../views/forum/forum_index.vue')
const Forum_heat = () => import('../views/forum/forum_heat.vue')
const Forum_post = () => import('../views/forum/forum_post.vue')
const Personifo = () => import('../views/forum/Personifo.vue')
const Course = () => import('../views/forum/Course.vue')

const Person = () => import('../views/person/person.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/tabbar',
      component: tabbar
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/userinfor',
      component: userinfor
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
    },
    {
      path: '/Forum_heat',
      component: Forum_heat
    },
    {
      path: '/Forum_post',
      component: Forum_post
    },
    {
      path: '/Personifo',
      component: Personifo
    },
    {
      path: '/Course',
      component: Course
    }
  ]
})



export default router 
