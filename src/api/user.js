import request from '@/utils/request'

export const reqLogin = data => {
  return request({
    url: '/vat-mock/user/login',
    method: 'post',
    data
  })
}

export const reqLogout = () => {
  return request({
    url: '/vat-mock/user/logout',
    method: 'post'
  })
}
