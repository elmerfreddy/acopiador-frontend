import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../layouts/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/LoginView.vue"),
  },
  {
    path: "/recover",
    name: "recover",
    component: () => import("../components/RecoverView.vue"),
  },
  {
    path: "/retrieve",
    name: "retrieve",
    component: () => import("../components/RetrieveView.vue"),
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: () => import("../components/Usuario.vue"),
  },
  {
    path: "/entidades",
    name: "entidades",
    component: () => import("../components/Entidad.vue"),
  },

  {
    path: '/dato',
    name: 'dato',

    component: () => import(/* webpackChunkName: "about" */ '../components/DatoTabs.vue')
  },
  
  {
    path: '/datos',
    name: 'Datos',
    component: () => import(/* webpackChunkName: "about" */ '../components/DatosList.vue')
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
