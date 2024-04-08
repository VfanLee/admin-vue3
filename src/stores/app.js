import { defineStore } from 'pinia'

const useAppStore = defineStore('app', {
  state: () => {
    return {
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
