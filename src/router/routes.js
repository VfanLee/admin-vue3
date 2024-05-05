import Layout from '@/layout/index.vue'
import nested from './modules/nested'

/**
 * 注意：仅当路由子项数量 >= 1时，子菜单才会显示
 * 默认规则：当一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式
 *          当一个路由下面的 children 声明的路由只有1个时，会将该子路由当做根路由显示在侧边栏
 *
 * name: 'route-name'                       设定路由的名字。必须！
 * hidden: false                            如果设置为 true，该路由不会在侧边栏出现。如 /login、或者一些编辑页面 /edit/1（默认为 false）
 * alwaysShow: false                        如果设置为 true，则会忽略之前定义的规则，不管路由下面的 children 声明的个数都会显示你的根路由（默认为 false）
 * link: false                              外链标志。
 * meta: {
          allowlist: false                  路由白名单，无需登陆即可访问（默认为 false）
          title: 'title'                    设置该路由在侧边栏展示的名字。
          icon: 'svg-name'                  侧边栏中显示的图标。
          activeMenu: '/active-menu'        当路由设置了该属性，路由菜单则会高亮相应的子菜单。如：文章编辑页面时，高亮文章列表。
        }
 */

export const constantRoutes = [
  // demo
  {
    path: '/demo',
    component: () => import('@/views/demo/index.vue'),
    name: 'Demo',
    meta: {
      title: 'Demo',
      allowlist: true
    },
    hidden: true
  },

  // 登录
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      title: '登录',
      allowlist: true
    },
    hidden: true
  },

  // 仪表盘
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: '工作台',
          icon: 'gauge-solid'
        }
      }
    ]
  }
]

export const asyncRoutes = [
  // article
  {
    path: '/article',
    name: 'Article',
    component: Layout,
    children: [
      {
        path: '',
        name: 'articleList',
        component: () => import('@/views/article/index.vue'),
        meta: {
          title: '文章管理',
          icon: 'star-solid'
        }
      },
      {
        path: 'detail/:id',
        name: 'articleDetail',
        component: () => import('@/views/article/detail.vue'),
        hidden: true,
        meta: {
          activeMenu: '/article'
        }
      },
      {
        path: 'edit/:id?',
        name: 'articleEdit',
        component: () => import('@/views/article/edit.vue'),
        hidden: true,
        meta: {
          activeMenu: '/article'
        }
      }
    ]
  },

  // 嵌套路由
  nested,

  // 错误页面
  {
    path: '/error-page',
    name: 'ErrorPage',
    component: Layout,
    alwaysShow: true,
    meta: {
      title: '错误页面',
      icon: 'ban-solid'
    },
    children: [
      {
        path: '404',
        name: 'ErrorPage404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404'
        }
      }
    ]
  },

  // 嵌套外链
  {
    path: '/nested-link',
    name: 'NestedLink',
    meta: {
      title: '嵌套外链',
      icon: 'arrow-up-right-from-square-solid'
    },
    children: [
      {
        path: 'https://google.com',
        link: true,
        meta: {
          title: 'Google'
        }
      },
      {
        path: 'https://baidu.com',
        link: true,
        meta: {
          title: 'Baidu'
        }
      }
    ]
  },

  // 外链
  {
    path: 'https://github.com/VfanLee/vue3-admin-template',
    name: 'Link',
    link: true,
    meta: {
      title: 'GitHub',
      icon: 'arrow-up-right-from-square-solid'
    }
  },

  // 添加 404 路由
  {
    path: '/:catchAll(.*)',
    name: '404',
    redirect: '/error-page/404',
    hidden: true
  }
]
