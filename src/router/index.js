import { createRouter, createWebHashHistory } from 'vue-router'

const login = () => import('../views/register/login.vue')
const SignUp = ()=> import('../views/register/signUp.vue')
const userinfor = () => import('../views/register/userinfo.vue')

const tabbar = () => import('../components/tabbar.vue')

const Home = () => import('../views/homepage/homepage.vue')
const Monthlydata = ()=> import('../components/homepage/monthlydata.vue')
const Forum = () => import('../views/forum/forum_index.vue')
const Forum_heat = () => import('../views/forum/forum_heat.vue')
const Forum_post = () => import('../views/forum/forum_post.vue')
const Personifo = () => import('../views/forum/Personifo.vue')
const Course = () => import('../views/forum/Course.vue')

const Person = () => import('../views/person/person.vue')
const History = () => import('../components/person/histroy.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/SignUp'
    },
    {
      path:'/SignUp',
      component:SignUp
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
      name:userinfor,
      component: userinfor
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path:'/Monthlydata',
      component:Monthlydata
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
    },
    {
      path: '/History',
      component: History
    }
  ]
})



export default router 
