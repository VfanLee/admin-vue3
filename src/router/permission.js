import useUserStore from '@/stores/user'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { asyncRoutes } from '@/router/routes'
import { filterRoutes } from '@/utils/route'

NProgress.configure({ showSpinner: false })

// 全局前置守卫
router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  NProgress.start()

  if (userStore.token) {
    if (to.path === '/login') {
      return next({ path: '/' })
    } else {
      const isNewRoute = await asyncAddRoutes()
      isNewRoute ? next(to.fullPath) : next()
    }
  } else {
    if (to.meta.allowlist) {
      next()
    } else {
      await userStore.logout()
      next({ path: `/login`, query: { redirect: to.fullPath } })
    }
  }
})

// 全局后置钩子
router.afterEach((to, from, failure) => {
  document.title = to.meta.title

  NProgress.done()
})

async function asyncAddRoutes() {
  let isNew = false

  filterRoutes(asyncRoutes).forEach(route => {
    const hasRoute = router.hasRoute(route.name)
    if (hasRoute) return
    router.addRoute(route)
    isNew = true
  })

  return isNew
}
