import Layout from '@/layout/index.vue'
import type { AppRouteItem } from './index'

export const constantRoutes: AppRouteItem[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录',
      allowlist: true,
    },
    hidden: true,
  },

  {
    path: '/',
    redirect: '/dashboard',
    hidden: true,
  },

  {
    path: '/',
    name: 'dashboard',
    component: Layout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard-index',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '仪表盘',
          icon: 'dashboard',
        },
      },
    ],
  },
]
