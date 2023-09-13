import { createRouter, createWebHashHistory } from 'vue-router'

const login = () => import('../views/register/login.vue')
const SignUp = () => import('../views/register/signUp.vue')
const extraFunction = () => import('../views/extraFunction/index.vue')
const userinfo = () => import('../views/register/userinfo.vue')


const Home = () => import('../views/homepage/homepage.vue')
const postContent = () => import('../components/forum/postContent.vue')

const userChart = () => import('../components/homepage/ballStage/userChart.vue')
const moretodo = () => import('../views/homepage/moretodo.vue')
const monthlycomp = () => import('../views/homepage/monthlycom.vue')

const Forum = () => import('../views/forum/forum_index.vue')
const Forum_post = () => import('../views/forum/forum_post.vue')
const Personifo = () => import('../views/forum/Personifo.vue')
const Course = () => import('../views/forum/course.vue')
const Courseplay = () => import('../components/forum/course/courseplay.vue')
const resource = () => import('../components/forum/resource/resource.vue')
const searchview = () => import('../components/forum/search/searchview.vue')

const Person = () => import('../views/person/person.vue')
const History = () => import('../views/person/history.vue')
const mycollect = () => import('../views/person/Mycollect.vue')
const mypost = () => import('../views/person/Mypost.vue')
const notification = () => import('../views/forum/notification.vue')
const useService = () => import('../views/person/useService.vue')
const setting = () => import('../views/person/setUp/setUp.vue')
const userLevel = () => import('../views/person/userLevel/userLevel.vue')
const vedio = () => import('../components/forum/vedio/vedio.vue')
const personCourse = () => import('../components/person/personCourse.vue')

const intro = () => import('../views/questionSet/intro/intro.vue')
const questionSet1 = () => import('../views/questionSet/quesJelly/quesJelly.vue')
const questionSet2 = () => import('../views/questionSet/quesMult/quesMulti.vue')
const questionSet3 = () => import('../views/questionSet/quesMult_v2/quesMult_v2.vue')
const questionSet4 = () => import('../views/questionSet/quesStage/quesStage.vue')
const questionSet5 = () => import('../views/questionSet/quesTF/quesTF.vue')

const ocr = () => import('../views/extraFunction/ocr/ocr.vue')
const objOcr = () => import('../components/extraFunction/objOcr.vue')
const videoOcr = () => import('../components/extraFunction/videoOcr.vue')
const chat = () => import('../components/extraFunction/chat.vue')

const goodsContainer = () => import('../components/forum/purchase/goodsContainer.vue')
const goodsState = () => import('../components/forum/purchase/goodsState.vue')
const userPos = () => import('../components/forum/purchase/userPos.vue')

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
      path: '/userinfo/:userId',
      name: 'userinfo',
      component: userinfo
    },
    {
      path: '/Home',
      component: Home,
    },
    {
      path: '/userChart',
      component: userChart,
    },
    {
      path: '/moretodo',
      component: moretodo
    },
    {
      path: '/monthlycomp',
      component: monthlycomp
    },
    {
      path: '/postContent/:pgId',
      name: 'postContent',
      component: postContent,

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
      path: '/resource',
      component: resource,

    },
    {
      path: '/vedio',
      component: vedio,

    },
    {
      path: '/chat',
      component: chat,

    },
    {
      path: '/Forum_post',
      component: Forum_post
    },
    {
      path: '/Personifo/:userId',
      name: 'Personifo',
      component: Personifo
    },
    {
      path: '/Course',
      component: Course
    },
    {
      path: '/Courseplay',
      component: Courseplay
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
      path: '/intro/:userId',
      name: 'intro',
      component: intro
    },
    {
      path: '/questionSet1/:userId',
      name: 'questionSet1',
      component: questionSet1
    },
    {
      path: '/questionSet2/:userId',
      name: 'questionSet2',
      component: questionSet2
    },
    {
      path: '/questionSet3/:userId',
      name: 'questionSet3',
      component: questionSet3
    },
    {
      path: '/questionSet4/:userId',
      name: 'questionSet4',
      component: questionSet4
    },
    {
      path: '/questionSet5/:userId',
      name: 'questionSet5',
      component: questionSet5
    },
    {
      path: '/setting',
      component: setting
    },
    {
      path: '/userLevel',
      component: userLevel
    },
    {
      path: '/ocr',
      component: ocr
    },
    {
      path: '/objOcr',
      component: objOcr
    },
    {
      path: '/videoOcr',
      component: videoOcr
    },
    {
      path: '/goodsContainer',
      component: goodsContainer
    },
    {
      path: '/goodsState',
      component: goodsState
    },
    {
      path: '/userPos',
      component: userPos
    },
    {
      path: '/personCourse',
      component: personCourse
    },
    {
      path: '/searchview',
      component: searchview
    }
  ]
})


export default router 
