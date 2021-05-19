import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/today',
    name: 'Today',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "today" */ '../views/Today.vue')
  },
  {
    path: '/log',
    name: 'Intake Log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "log" */ '../views/Log.vue')
  },
  {
    path: '/food',
    name: 'Food Store',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "food" */ '../views/Food.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
