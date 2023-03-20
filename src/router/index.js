import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/SistemaEventosAcademico/LoginView.vue"),
  },
  {
    path: "/recover",
    name: "recover",
    component: () => import("../components/SistemaEventosAcademico/RecoverView.vue"),
  },
  {
    path: "/retrieve",
    name: "retrieve",
    component: () => import("../components/SistemaEventosAcademico/RetrieveView.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../layouts/Dashboard.vue"),
  },
  {
    path: "/usuarios",
    name: "usuarios",
    component: () => import("../components/SistemaEventosAcademico/Usuario.vue"),
  },
  
  
  //281
  {
    path: '/evento',
    name: 'evento',
    component: () => import(/* webpackChunkName: "enviar_datos" */ '../components/SistemaEventosAcademico/Eventos.vue')
  },
  {
    path: '/infraestructura',
    name: 'infraestructura',
    component: () => import(/* webpackChunkName: "enviar_datos" */ '../components/SistemaEventosAcademico/Infraestructura.vue')
  },
  {
    path: '/comentario',
    name: 'comentario',
    component: () => import(/* webpackChunkName: "enviar_datos" */ '../components/SistemaEventosAcademico/Comentarios.vue')
  },
  {
    path: '/graficos',
    name: 'graficos',
    component: () => import(/* webpackChunkName: "enviar_datos" */ '../components/SistemaEventosAcademico/Graficos.vue')
  },
  {
    path: '/paginaweb',
    name: 'paginaweb',
    component: () => import(/* webpackChunkName: "enviar_datos" */ '../components/PaginaPrincipal.vue')
  },
  {
    path: '/avatar',
    name: 'avatar',
    component: () => import(/* webpackChunkName: "enviar_datos" */ '../components/Avatar.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
