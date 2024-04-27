import Layout from '@/layout/index.vue'

export default {
  path: '/nested',
  name: 'Nested',
  component: Layout,
  redirect: '/nested/menu1/menu1-1',
  meta: {
    title: 'nested',
    icon: 'sitemap-solid'
  },
  children: [
    {
      path: 'menu1',
      name: 'NestedMenu1',
      component: () => import('@/views/nested/menu1/index.vue'),
      redirect: '/nested/menu1/menu1-1',
      meta: {
        title: '菜单 1'
      },
      children: [
        {
          path: 'menu1-1',
          name: 'NestedMenu1-1',
          component: () => import('@/views/nested/menu1/menu1-1/index.vue'),
          meta: {
            title: '菜单 1-1'
          }
        },
        {
          path: 'menu1-2',
          name: 'NestedMenu1-2',
          component: () => import('@/views/nested/menu1/menu1-2/index.vue'),
          redirect: '/nested/menu1/menu1-2/menu1-2-1',
          meta: {
            title: '菜单 1-2'
          },
          children: [
            {
              path: 'menu1-2-1',
              name: 'NestedMenu1-2-1',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1/index.vue'),
              meta: {
                title: '菜单 1-2-1'
              }
            },
            {
              path: 'menu1-2-2',
              name: 'NestedMenu1-2-2',
              component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2/index.vue'),
              meta: {
                title: '菜单 1-2-2'
              }
            },
            {
              path: 'https://google.com',
              link: true,
              meta: {
                title: 'Google',
                icon: 'gauge-solid'
              }
            }
          ]
        },
        {
          path: 'menu1-3',
          name: 'NestedMenu1-3',
          component: () => import('@/views/nested/menu1/menu1-3/index.vue'),
          meta: {
            title: '菜单 1-3'
          }
        }
      ]
    },
    {
      path: 'menu2',
      name: 'NestedMenu2',
      component: () => import('@/views/nested/menu2/index.vue'),
      meta: {
        title: '菜单 2'
      }
    }
  ]
}
