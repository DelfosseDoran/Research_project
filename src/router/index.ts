import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/search/:search/:page',
      name: 'search',
      component: () => import('../views/List.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/Detail.vue'),
    }
  ],
});

export default router
