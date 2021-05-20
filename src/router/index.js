import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/season',
    name: 'Season',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "season" */ '../views/Season.vue')
  },
  {
    path: '/week',
    name: 'Week',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "week" */ '../views/Week.vue')
  },
  {
    path: '/exercise',
    name: 'Exercise Log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "exercise" */ '../views/Exercise.vue')
  },
  {
    path: '/intake',
    name: 'Intake Log',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "intake" */ '../views/Intake.vue')
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
