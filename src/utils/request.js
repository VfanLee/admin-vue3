import axios from 'axios'
import useUserStore from '@/stores/user'

const request = axios.create({
  baseURL: '',
  timeout: 3000
})

// 请求拦截器
request.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    const userStore = useUserStore()
    if (userStore.token) {
      config.headers.Authorization = userStore.token
    }
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 响应拦截器
request.interceptors.response.use(
  response => {
    // 2xx 范围内的状态码都会触发该函数
    const { code, msg, data } = response.data
    /**
     * 请求接口统一结构为：{ code: xxx, msg: xxx, data: xxx }
     * 当 code === 1 时，统一返回 data
     * 当 code !== 1 时，提示并统一返回 Promise.reject(new Error(msg))
     */
    debugger
    if (code === 1) {
      return data
    } else {
      ElMessage({
        type: 'error',
        message: msg
      })
      return Promise.reject(new Error(msg))
    }
  },
  error => {
    // 超出 2xx 范围的状态码都会触发该函数
    let message = ''
    const status = error.request.status
    switch (status) {
      case 401:
        message = 'token 过期'
        break
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
      message
    })
    return Promise.reject(error)
  }
)

export default request
