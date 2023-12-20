import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import dashboard from '../views/Dashboard.vue';
import coordinador from '../views/Coordinador.vue';
import TablaGanadores from '../views/tabla_ganadores.vue';
import CategoriasInformativas from '../views/CategoriasInformativas.vue';
import Navbar from '../views/Navbar.vue';



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/coordinador',
    name: 'coordinador',
    component: coordinador
  },
  { path: '/tabla',
    name: 'tabla',
    component: TablaGanadores 
  },
  { 
    path: '/categorias',
    name: 'categorias',   
    component: CategoriasInformativas 
  },
  { 
    path: '/Navbar',
    name: 'Navbar',   
    component: Navbar 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
