import { Router } from 'express'
import { isNull } from '../utils/valid.js'
import { createSuccess, createError } from '../utils/response.js'

import { tokens, users } from '../mock/users.js'

const router = Router()

router.post('/login', (req, res, next) => {
  const body = req.body
  const { username, password } = body
  if (isNull(username) || isNull(password)) {
    return res.status(200).json(createError(10001, '请输入用户名或密码'))
  }

  const token = tokens[username]
  if (!token) {
    return res.status(200).json(createError(10002, '用户名或密码错误'))
  }

  res.status(200).json(createSuccess('登录成功', token))
})

router.get('/info', (req, res, next) => {
  const token = req.headers.authorization
  if (!token) {
    return next(createError(401, '请先登录'))
  }

  const userInfo = users[token]
  if (!userInfo) {
    return next(createError(401, '登陆过期'))
  }

  res.status(200).json(createSuccess('成功', userInfo))
})

export default router
