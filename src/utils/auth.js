import Cookies from 'js-cookie'

/**
 * 获取保存的 token
 * @returns {string}
 */
export function getToken() {
  return Cookies.get('token') || ''
}

/**
 * 本地缓存用户 token
 * @param {string} token token
 */
export function setToken(token) {
  Cookies.set('token', token)
}

/**
 * 移除用户 token
 */
export function removeToken() {
  Cookies.remove('token')
}

/**
 * 获取保存的用户信息
 * @returns {Object}
 */
export function getUserInfo() {
  try {
    return JSON.parse(Cookies.get('USER_INFO'))
  } catch (error) {
    return {}
  }
}

/**
 * 本地缓存用户信息
 * @param {string} userInfo 用户信息
 */
export function setUserInfo(userInfo) {
  Cookies.set('USER_INFO', JSON.stringify(userInfo))
}

/**
 * 移除用户信息
 * @param {string} userInfo 用户信息
 */
export function removeUserInfo() {
  Cookies.remove('USER_INFO')
}
