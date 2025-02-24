import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { reqLogin, reqUserInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
import cookie from '@/utils/cookie'

export const useUserStore = defineStore('user', () => {
  const route = useRoute()
  const router = useRouter()

  const token = ref<string>(getToken())
  const userInfo = ref<{
    id?: string
    email?: string
    name?: string
    avatar?: string
  }>({})
  const menuCode = ref<string[]>([])

  const login = async (data: { username: string; password: string }) => {
    const res = await reqLogin(data)
    if (res.code === 200) {
      token.value = res.result
      setToken(res.result)

      if (route.query.redirect) {
        router.replace(route.query.redirect as string)
      } else {
        router.replace('/')
      }
      ElNotification({
        type: 'success',
        message: '登录成功',
        duration: 3000,
      })
    } else {
      return Promise.reject(res)
    }
  }

  const getUserInfo = async () => {
    const res = await reqUserInfo()
    if (res.code === 200) {
      userInfo.value = res.result
      return userInfo
    } else {
      logout()
    }
  }

  const getMenus = async () => {
    menuCode.value = []
  }

  const logout = () => {
    token.value = ''
    userInfo.value = {}
    cookie.removeAll()

    router.replace({ name: 'login', query: { redirect: router.currentRoute.value.fullPath } })
  }

  return {
    token,
    userInfo,
    menuCode,
    login,
    getUserInfo,
    getMenus,
    logout,
  }
})
