import { login, userInfo } from '@/mock'

type DataResponse = Promise<{
  code: number
  message: string
  result?: any
}>

export const reqLogin = (data: { username: string; password: string }): DataResponse => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(login(data))
    }, 500)
  })
}

export const reqUserInfo = (): DataResponse => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(userInfo())
    }, 500)
  })
}

// export const reqUserMenuCode = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         code: 200,
//         message: 'success',
//         result: 'admin',
//       })
//     }, 500)
//   })
// }
