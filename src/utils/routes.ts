import type { AppRouteItem, RouteMenus } from '@/router/routes'
import { isEmpty, isNil } from 'lodash'

export function filterAsyncRoutes(routes: AppRouteItem[]): AppRouteItem[] {
  const res: AppRouteItem[] = []
  // TODO: 通过 api 进行过滤
  routes.forEach((route) => {
    const tmp = { ...route }
    if (tmp.children) {
      tmp.children = filterAsyncRoutes(tmp.children)
    }
    res.push(tmp)
  })
  return res
}

export function generateRouteMenus(routes: AppRouteItem[]) {
  return routes
    .filter((route) => !route.hidden)
    .map((route) => {
      let children: RouteMenus[] = []
      if (!isNil(route.children) && !isEmpty(route.children)) {
        children = generateRouteMenus(route.children)
      }
      const routeMenus: RouteMenus = {
        id: route.name,
        text: route.meta?.title,
        icon: route.meta?.icon,
        link: route.path,
        children,
        alwaysShow: route.alwaysShow,
      }

      return routeMenus
    }) as RouteMenus[]
}

export function isExternalLink(path: string): boolean {
  return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.test(
    path,
  )
}
