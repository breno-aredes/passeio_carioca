import { createRouter, createWebHistory } from 'vue-router'

// Import components
import Home from '../views/Home.vue'
import ParceriasConquistas from '../views/ParceriasConquistas.vue'
import Prefeituras from '../views/Prefeituras.vue'
import Anuncie from '../views/Anuncie.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/parcerias-conquistas',
    name: 'ParceriasConquistas',
    component: ParceriasConquistas
  },
  {
    path: '/prefeituras',
    name: 'Prefeituras',
    component: Prefeituras
  },
  {
    path: '/anuncie',
    name: 'Anuncie',
    component: Anuncie
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // Always scroll to top
    return { top: 0 }
  }
})

export default router 