import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profil',
    name: 'Profil',
    component: () => import(/* webpackChunkName: "profil" */ '../views/Profil.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
