import request from '@/utils/request'

interface LoginResponse {
  code: number
  message: string
  result?: any
}

export const reqLogin = (data: { username: string; password: string }) =>
  request({
    url: '/user/login',
    method: 'POST',
    data,
  }) as Promise<LoginResponse>

export const reqUserInfo = () =>
  request({
    url: '/user/info',
    method: 'GET',
  }) as Promise<LoginResponse>

export const reqUserMenuCode = () =>
  request({
    url: '/user/menu',
    method: 'GET',
  }) as Promise<LoginResponse>
