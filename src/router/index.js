import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
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
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../layouts/Dashboard.vue"),
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
    component: () => import(/* webpackChunkName: "dato" */ '../components/DatoTabs.vue')
  }, 
  {
    path: '/datos',
    name: 'datos',
    component: () => import(/* webpackChunkName: "datos" */ '../components/Datos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
