import mockjs from 'mockjs'

mockjs.mock('/vat-mock/user/login', 'post', ({ url, type, body }) => {
  const { username, password } = JSON.parse(body)

  return {
    code: 1,
    msg: 'success',
    data: {
      token: 'vat-token',
      username: username
    }
  }
})

mockjs.mock('/vat-mock/user/logout', 'post', ({ url, type, body }) => {
  return {
    code: 1,
    msg: 'success',
    data: ''
  }
})
