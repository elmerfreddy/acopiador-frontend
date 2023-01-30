import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../layouts/Dashboard.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue')
  },
  {
    path: '/recover',
    name: 'recover',
    component: () => import(/* webpackChunkName: "about" */ '../views/RecoverView.vue')
  },
  {
    path: '/retrieve',
    name: 'retrieve',
    component: () => import(/* webpackChunkName: "about" */ '../views/RetrieveView.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "about" */ '../components/UserList.vue')
  },
  {
    path: '/entidad',
    name: 'entidad',
    component: () => import(/* webpackChunkName: "about" */ '../components/EntidadList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
