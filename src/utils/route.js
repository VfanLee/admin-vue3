import { resolve } from 'path-browserify'

/**
 * 生成路由菜单
 * @param {any[]} routes 路由表
 * @param {string} basePath 基础路径
 * @returns {any[]}
 */
export function generateRouteMenus(routes, basePath = '/') {
  return routes
    .filter(route => !route.hidden)
    .map(route => {
      const modifiedRoute = {
        ...route,
        path: resolve(basePath, route.path),
        children: route.children || [],
        meta: route.meta || {}
      }

      if (modifiedRoute.children.length > 0) {
        modifiedRoute.children = generateRouteMenus(modifiedRoute.children, modifiedRoute.path)
      }

      return modifiedRoute
    })
}
