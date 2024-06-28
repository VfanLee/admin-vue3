import request from '@/utils/request'

const VAT_API = import.meta.env.VITE_VAT_API

export const reqLogin = data => {
  return request({
    url: VAT_API + '/user/login',
    method: 'post',
    data,
  })
}

export const reqLogout = () => {
  return request({
    url: VAT_API + '/user/logout',
    method: 'post',
  })
}
