import { defineStore } from 'pinia'
import { constantRoutes, asyncRoutes } from '@/router/routes'
import { filterAsyncRoutes } from '@/utils/routes'
import type { AppRouteItem } from '@/router/routes'
import router from '@/router'

export const useRouteStore = defineStore('route', () => {
  const routes = ref<AppRouteItem[]>([])
  const asyncAddRoutes = ref<AppRouteItem[]>([])

  const generateRoutes = () => {
    const accessibleRoutes = filterAsyncRoutes(asyncRoutes)
    accessibleRoutes.forEach((route) => {
      router.addRoute(route)
    })

    routes.value = [...constantRoutes, ...accessibleRoutes]
    asyncAddRoutes.value = [...accessibleRoutes]
  }

  return {
    routes,
    asyncAddRoutes,
    generateRoutes,
  }
})
