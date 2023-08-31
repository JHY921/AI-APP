import { createRouter, createWebHashHistory } from 'vue-router'

const login = () => import('../views/register/login.vue')
const SignUp = () => import('../views/register/signUp.vue')
const extraFunction = () => import('../views/extraFunction/index.vue')
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
const setting = () => import('../views/person/setting.vue')

const questionSet1 = () => import('../views/questionSet/quesJelly/quesJelly.vue')
const questionSet2 = () => import('../views/questionSet/quesMult/quesMulti.vue')
const questionSet3 = () => import('../views/questionSet/quesMult_v2/quesMult_v2.vue')
const questionSet4 = () => import('../views/questionSet/quesStage/quesStage.vue')
const questionSet5 = () => import('../views/questionSet/quesTF/quesTF.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/signup',
      component: SignUp
    },
    {
      path: '/userinfor',
      name: 'userinfor',
      component: userinfor
    },
    {
      path: '/Home',
      component: Home,

    },
    {
      path: '/Monthlydata',
      component: Monthlydata
    },
    {
      path: '/extraFunction',
      component: extraFunction,

    },
    {
      path: '/Forum',
      component: Forum,

    },
    {
      path: '/Person',
      component: Person,

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
    },
    {
      path: '/questionSet1',
      component: questionSet1
    },
    {
      path: '/questionSet2',
      component: questionSet2
    },
    {
      path: '/questionSet3',
      component: questionSet3
    },
    {
      path: '/questionSet4',
      component: questionSet4
    },
    {
      path: '/questionSet5',
      component: questionSet5
    },
    {
      path: '/setting',
      component: setting
    }
  ]
})


export default router 
