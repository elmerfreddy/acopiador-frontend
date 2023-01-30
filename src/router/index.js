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
    path: '/hom',
    name: 'hom',
    component: () => import(/* webpackChunkName: "about" */ '../views/HomView.vue')
  },
  {
    path: '/lista',
    name: 'lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListaView.vue')
  },
  {
    path: '/crear',
    name: 'crear',
    component: () => import(/* webpackChunkName: "about" */ '../views/CrearView.vue')
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: () => import(/* webpackChunkName: "about" */ '../views/PerfilView.vue')
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
