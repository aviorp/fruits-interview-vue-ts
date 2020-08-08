import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import FruitList from '../views/FruitList/FruitList.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'fruit-list',
    component: FruitList
  },
  {
    path: '/favorites',
    name: 'favorites',

    component: () => import('../views/Favorites/Favorites.vue')
  },
  {
    path: '/selected-fruit',
    name: 'selected-fruit',
    component: () => import('../views/SelectedFruit/SelectedFruit.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
