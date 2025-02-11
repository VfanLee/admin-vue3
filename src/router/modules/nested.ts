import Layout from '@/layout/index.vue'
import type { AppRouteItem } from '@/router/routes'

export const nested: AppRouteItem = {
  path: '/nested',
  name: 'nested',
  component: Layout,
  meta: {
    title: '路由嵌套',
    icon: 'cube',
  },
  redirect: '/nested/menu1',
  children: [
    {
      path: '/nested/menu1',
      name: 'nested-menu1',
      component: () => import('@/views/nested/menu1/menu1.vue'),
      meta: {
        title: '菜单 1',
        icon: 'cube',
      },
      redirect: '/nested/menu1/menu1-1',
      children: [
        {
          path: '/nested/menu1/menu1-1',
          name: 'nested-menu1-1',
          component: () => import('@/views/nested/menu1/menu1-1/menu1-1.vue'),
          meta: {
            title: '菜单 1-1',
            icon: 'cube',
          },
        },
        {
          path: '/nested/menu1/menu1-2',
          name: 'nested-menu1-2',
          component: () => import('@/views/nested/menu1/menu1-2/menu1-2.vue'),
          meta: {
            title: '菜单 1-2',
            icon: 'cube',
          },
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          children: [
            {
              path: '/nested/menu1/menu1-2/menu1-2-1',
              name: 'nested-menu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/menu1-2-1.vue'),
              meta: {
                title: '菜单 1-2-1',
                icon: 'cube',
              },
            },
            {
              path: '/nested/menu1/menu1-2/menu1-2-2',
              name: 'nested-menu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/menu1-2-2.vue'),
              meta: {
                title: '菜单 1-2-2',
                icon: 'cube',
              },
            },
          ],
        },
        {
          path: '/nested/menu1/menu1-3',
          name: 'nested-menu1-3',
          component: () => import('@/views/nested/menu1/menu1-3/menu1-3.vue'),
          meta: {
            title: '菜单 1-3',
            icon: 'cube',
          },
        },
      ],
    },
    {
      path: '/nested/menu2',
      name: 'nested-menu2',
      component: () => import('@/views/nested/menu2/menu2.vue'),
      meta: {
        title: '菜单 2',
        icon: 'cube',
      },
    },
  ],
}
