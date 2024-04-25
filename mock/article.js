import mockjs from 'mockjs'

mockjs.mock('/vat-mock/article', 'get', ({ url, type, body }) => {
  return {
    'code': 1,
    'msg': 'success',
    'data:10': [
      {
        id: '@guid',
        title: 'title(3, 5)'
      }
    ]
  }
})
