import cookie from './cookie'

export function getToken() {
  return cookie.get('token')
}

export function setToken(token: string) {
  cookie.set('token', token)
}
