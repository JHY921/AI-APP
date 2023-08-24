import { createRouter, createWebHashHistory } from 'vue-router'

const login = () => import('../views/register/login.vue')
const SignUp = () => import('../views/register/signUp.vue')
const userinfor = () => import('../views/register/userinfo.vue')


const Home = () => import('../views/homepage/homepage.vue')
const Monthlydata = () => import('../components/homepage/monthlydata.vue')
const Forum = () => import('../views/forum/forum_index.vue')
const Forum_post = () => import('../views/forum/forum_post.vue')
const Personifo = () => import('../views/forum/Personifo.vue')
const Course = () => import('../views/forum/course.vue')

const Person = () => import('../views/person/person.vue')
const History = () => import('../views/person/history.vue')
const mycollect = () => import('../views/person/Mycollect.vue')
const mypost = () => import('../views/person/Mypost.vue')
const notification = () => import('../views/forum/notification.vue')
const useService = () => import('../views/person/useService.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/userinfor',
      name: userinfor,
      component: userinfor
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/Monthlydata',
      component: Monthlydata
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
    },
    {
      path: '/mycollect',
      component: mycollect
    },
    {
      path: '/mypost',
      component: mypost
    },
    {
      path: '/notification',
      component: notification
    },
    {
      path: '/useService',
      component: useService
    }
  ]
})



export default router 
