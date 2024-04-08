import { defineStore } from 'pinia'
import router from '@/router'
import { getToken, setToken, removeToken } from '@/utils/auth'

const useUserStore = defineStore('user', {
  state: () => ({
    token: getToken(),
    userInfo: {},
    menuCode: []
  }),

  getters: {},

  actions: {
    login() {
      this.token = 'vat-token'

      setToken('vat-token')
    },

    async getUserInfo() {
      const userInfo = {
        name: 'Super Admin'
      }
      this.userInfo = userInfo
      return userInfo
    },

    logout() {
      this.token = ''
      this.userInfo = {}
      removeToken()

      router.replace({ path: '/login' })
    }
  }
})

export default useUserStore
