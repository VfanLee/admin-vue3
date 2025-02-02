import type { RouteRecordRaw, RouteRecordNameGeneric } from 'vue-router'

/**
 * 默认规则：
 * - 当 layout 路由下面的 children 声明的子路由 == 1 时：
 *   - 默认情况下：只会显示子路由；
 *   - 若需要变为嵌套模式，需要将 allowlist 设置为 true。
 * - 当 layout 路由下面的 children 声明的子路由 >= 1 时，自动会变成嵌套的模式。
 *
 * path: 'route-path'                       路由路径
 * name: 'route-name'                       路由唯一名称
 * meta: {
 *    allowlist: true                       路由白名单，无需登陆即可访问
 *    title: 'title'                        侧边栏展示的名称
 *    icon: 'svg-name'                      侧边栏展示的图标（图标在 icons 文件夹中进行定义）
 *    activeMenu: '/example/list'           当路由设置了该属性，则会高亮相对应的侧边栏
 * }
 * hidden: true                             当设置 true 的时候该路由不会在侧边栏出现
 * alwaysShow: true                         如果设置为 true，则会忽略默认规则，不管路由下面的 children 的个数都显示根路由
 */

export interface AppRouteMeta {
  allowlist?: boolean
  title: string
  icon?: string
  activeMenu?: string
}

export type AppRouteItem = RouteRecordRaw & {
  children?: AppRouteItem[]
  meta?: AppRouteMeta
  hidden?: boolean
  alwaysShow?: boolean
}

export interface RouteMenus {
  id: RouteRecordNameGeneric
  text: string | undefined
  icon: string | undefined
  link: string
  children: RouteMenus[]
  alwaysShow: boolean | undefined
}

export * from './constantRoutes'
export * from './asyncRoutes'
