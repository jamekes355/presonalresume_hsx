import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // 以后可以在这里添加更多路由，比如作品详情页
    // {
    //   path: '/portfolio/:id',
    //   name: 'portfolio-details',
    //   component: () => import('../views/PortfolioDetail.vue')
    // }
  ]
})

export default router
