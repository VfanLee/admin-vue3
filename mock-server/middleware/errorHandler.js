import { createError } from '../utils/response.js'

// 统一错误处理
function errorHandler(err, req, res, next) {
  console.log(err)

  if (err.code) {
    // 客户端错误，如 400/404 等
    res.status(err.code).json(createError(err.code, err.message, err.result))
  } else {
    // 服务器错误，500
    res.status(500).json(createError(500, err.message, undefined))
  }
}

export default errorHandler
