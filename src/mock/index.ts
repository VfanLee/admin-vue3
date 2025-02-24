import cookie from '@/utils/cookie'

const tokens: { [key: string]: any } = {
  admin: 'admin-token',
  guest: 'guest-token',
}

const infos: { [key: string]: any } = {
  'admin-token': {
    id: '93DDB0DE-3AAd-c3FC-23EB-C6f7DEc271b9',
    email: 'admin@gmail.com',
    name: 'Admin',
    avatar:
      'https://raw.githubusercontent.com/esrrhs/xiaohuangji/refs/heads/master/data/42d40aa214de23a2ee65f649d2a2e7fe.gif',
  },
  'guest-token': {
    id: '422b6a9b-c700-463c-a294-e539748cc634',
    email: 'guest@gmail.com',
    name: 'Guest',
    avatar:
      'https://raw.githubusercontent.com/esrrhs/xiaohuangji/refs/heads/master/data/42d40aa214de23a2ee65f649d2a2e7fe.gif',
  },
}

export function login(data: { username: string; password: string }) {
  const { username } = data

  const token = tokens[username]

  if (token) {
    cookie.set('token', token)
    return {
      code: 200,
      message: 'success',
      result: token,
    }
  } else {
    return {
      code: 200001,
      message: '用户名或密码错误',
    }
  }
}

export function userInfo() {
  const token = cookie.get('token')

  let res = infos[token]
  if (res) {
    cookie.set('userInfo', res)
    return {
      code: 200,
      message: 'success',
      result: res,
    }
  } else {
    return {
      code: 200001,
      message: '授权过期',
    }
  }
}
