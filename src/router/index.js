import Vue from 'vue'
import VueRouter from 'vue-router'
import DrinksList from '../views/DrinksList.vue'
import Ping from '../components/Ping.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DrinksList
  },
  {
    path: '/ping',
    name: 'Ping',
    component: Ping,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
