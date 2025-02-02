import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const collapse = ref(false)
  const isDark = ref(false)

  const setCollapse = (val: boolean) => {
    collapse.value = val
  }

  const toggleCollapse = () => {
    setCollapse(!collapse.value)
  }

  return {
    collapse,
    setCollapse,
    toggleCollapse,

    isDark,
  }
})
