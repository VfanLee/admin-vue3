import useUserStore from '@/stores/user'
import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { isEmptyObject } from '@/utils'

NProgress.configure({ showSpinner: false })

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore()

  NProgress.start()

  if (userStore.token) {
    if (to.path === '/login') {
      return next({ path: '/' })
    } else {
      if (!isEmptyObject(userStore.userInfo)) {
        next()
      } else {
        userStore.logout()
        next({ path: `/login`, query: { redirect: to.fullPath } })
      }
    }
  } else {
    if (to.meta.allowlist) {
      next()
    } else {
      next(`/login`)
    }
  }
})

router.afterEach((to, from, failure) => {
  document.title = to.meta.title

  NProgress.done()
})
