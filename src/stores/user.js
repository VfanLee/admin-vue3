import { defineStore } from 'pinia'
import router from '@/router'
import { getToken, setToken, removeToken, getUserInfo, setUserInfo, removeUserInfo } from '@/utils/auth'
import { reqLogin, reqLogout } from '@/api/user'

const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    userInfo: getUserInfo()
  }),

  getters: {},

  actions: {
    async login(data) {
      const res = await reqLogin(data)

      this.token = res.token
      this.userInfo = res

      setToken(res.token)
      setUserInfo(res)
    },

    async logout() {
      await reqLogout()

      this.token = ''
      this.userInfo = {}

      removeToken()
      removeUserInfo()
    }
  }
})

export default useUserStore
