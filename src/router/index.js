import { createRouter, createWebHashHistory } from 'vue-router'
import { constantRoutes } from './routes'
import { filterRoutes } from '@/utils/route'

const routes = filterRoutes(constantRoutes)

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
