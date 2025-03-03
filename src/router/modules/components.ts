import Layout from '@/layout/index.vue'
import type { AppRouteItem } from '@/router/routes'

export const components: AppRouteItem = {
  path: '/components',
  name: 'components',
  component: Layout,
  meta: {
    title: '组件',
    icon: 'app-store',
  },
  alwaysShow: true,
  redirect: '/components/richtext',
  children: [
    {
      path: '/components/richtext',
      name: 'components-richtext',
      component: () => import('@/views/components/richtext.vue'),
      meta: {
        title: '富文本',
        // icon: 'cube',
      },
    },
    {
      path: '/components/marked',
      name: 'components-marked',
      component: () => import('@/views/components/marked.vue'),
      meta: {
        title: 'Markdown',
        // icon: 'cube',
      },
    },
    {
      path: '/components/fullcalendar',
      name: 'components-fullcalendar',
      component: () => import('@/views/components/fullcalendar.vue'),
      meta: {
        title: '日历',
        // icon: 'cube',
      },
    },
  ],
}
