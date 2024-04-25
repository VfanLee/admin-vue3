import { resolve } from 'path-browserify'

/**
 * 过滤外链路由
 * @param {any[]} routes 路由表
 * @returns
 */
export function filterLinkRoute(routes) {
  return routes.filter(item => {
    if (item.link) {
      return false
    } else {
      return true
    }
  })
}

/**
 * 生成路由菜单
 * @param {any[]} routes 路由表
 * @param {string} basePath 基础路径
 * @returns {any[]}
 */
export function generateRouteMenus(routes, basePath = '') {
  const routeMenus = routes
    .filter(route => !route.hidden)
    .map(route => {
      const modifiedRoute = {
        ...route,
        path: route.link ? route.path : resolve(basePath, route.path),
        children: route.children || [],
        meta: route.meta || {}
      }

      if (modifiedRoute.children.length > 0) {
        modifiedRoute.children = generateRouteMenus(modifiedRoute.children, modifiedRoute.path)
      }

      return modifiedRoute
    })

  return routeMenus
}
