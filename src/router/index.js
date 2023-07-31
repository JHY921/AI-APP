import { createRouter, createWebHashHistory } from 'vue-router'
const Home = () => import('../views/homepage/homepage.vue')
const Forum = () => import('../views/forum/forum_index.vue')
const Person = () => import('../views/person/person.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
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
})



export default router 
