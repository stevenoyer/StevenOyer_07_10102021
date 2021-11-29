import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import User from '../views/User.vue'

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
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post
  },
  {
    path: '/user/:id',
    name: 'User',
    component: User
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
