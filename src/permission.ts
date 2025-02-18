import { isEmpty } from 'lodash-es'
import { useUserStore } from '@/stores/user'
import { useRouteStore } from '@/stores/route'
import router from '@/router'
import { setAppTitle } from '@/utils/app'

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()
  const routeStore = useRouteStore()

  if (userStore.token) {
    if (to.path === '/login') {
      return next({ path: '/' })
    } else {
      if (isEmpty(userStore.userInfo)) {
        await userStore.getUserInfo()
        // const menuData = await userStore.getMenus()
        routeStore.generateRoutes()
        next({ ...to, replace: true })
      } else {
        next()
      }
    }
  } else {
    if (to.meta.allowlist) {
      next()
    } else {
      next({ name: 'login', query: { redirect: to.fullPath } })
    }
  }
})

router.afterEach((to, from, failure) => {
  setAppTitle(to.meta.title as string)
})
