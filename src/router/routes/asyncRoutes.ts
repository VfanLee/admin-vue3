import Layout from '@/layout/index.vue'
import type { AppRouteItem } from '@/router/routes'
import { nested } from '../modules/nested'
import { components } from '../modules/components'

export const asyncRoutes: AppRouteItem[] = [
  // 嵌套路由菜单示例
  nested,

  // 组件示例
  components,

  // 错误页示例
  {
    path: '/error',
    name: 'error',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: '错误页',
      icon: 'cube',
    },
    children: [
      {
        path: '/error/404',
        name: 'error-404',
        component: () => import('@/views/error/404.vue'),
        meta: {
          title: '404',
          icon: 'cube',
        },
      },
    ],
  },

  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404.vue'),
    meta: {
      title: '404',
      allowlist: true,
    },
    hidden: true,
  },

  {
    path: '/:catchAll(.*)',
    redirect: '/404',
    hidden: true,
  },
]
