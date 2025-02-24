import axios from 'axios'
import { useUserStore } from '@/stores/user'

const request = axios.create({
  // baseURL: 'https://example.com/api',
  timeout: 3000,
})

request.interceptors.request.use(
  (config) => {
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    const { code } = response.data
    if (code === 200) {
      return response.data
    } else {
      return Promise.reject(response.data)
    }
  },
  (error) => {
    const userStore = useUserStore()
    let message = ''
    const status = error.request.status
    switch (status) {
      case 401:
        message = 'token 过期'
        ElMessageBox({
          type: 'error',
          message: '登录已过期，是否重新登录？',
          closeOnClickModal: false,
          closeOnPressEscape: false,
          showClose: true,
          showCancelButton: true,
        })
          .then((value) => {
            userStore.logout()
          })
          .catch((value) => {})
        return
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

export default request
