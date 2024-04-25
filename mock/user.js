import mockjs from 'mockjs'

mockjs.mock('/vat-mock/user/login', 'post', ({ url, type, body }) => {
  const { username, password } = JSON.parse(body)

  return {
    code: 1,
    msg: '登陆成功',
    data: {
      token: 'vat-token',
      username: username
    }
  }
})
