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
<<<<<<< HEAD
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
    path: '/dato',
    name: 'dato',
    component: () => import(/* webpackChunkName: "about" */ '../components/DatoTabs.vue')
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
  },
  {
    path: '/datos',
    name: 'Datos',
    component: () => import(/* webpackChunkName: "about" */ '../components/DatosList.vue')
  },
]
=======
];
>>>>>>> eca962a30838991748df6fd350c7245b8748ad14

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
