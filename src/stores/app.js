import { defineStore } from 'pinia'
import config from '@/config/app'

const useAppStore = defineStore('app', {
  state: () => {
    return {
      title: config.title,
      isCollapse: false
    }
  },

  getters: {},

  actions: {
    setCollapse(state) {
      this.isCollapse = state
    }
  }
})

export default useAppStore
