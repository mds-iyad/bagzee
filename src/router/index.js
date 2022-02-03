import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Community from '../views/Community.vue'
import Professionnels from '../views/Professionnels.vue'
import Porter from '../views/Porter.vue'
import Proposer from '../views/Proposer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/community',
    name: 'Community',
    component: Community
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/professionnels',
    name: 'Professionnels',
    component: Professionnels
  },
  {
    path: '/proposer',
    name: 'Proposer',
    component: Proposer
  },
  {
    path: '/porter',
    name: 'Porter',
    component: Porter
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
