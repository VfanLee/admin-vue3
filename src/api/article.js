import request from '@/utils/request'

export const reqGetArticleList = params => {
  return request({
    url: '/vat-mock/article',
    method: 'get',
    params
  })
}

export const reqGetArticleDetail = articleId => {
  return request({
    url: `/vat-mock/article/${articleId}`,
    method: 'get'
  })
}

export const reqEditArticle = data => {
  return request({
    url: `/vat-mock/article`,
    method: 'post',
    data
  })
}

export const reqDeleteArticle = articleId => {
  return request({
    url: `/vat-mock/article/${articleId}`,
    method: 'delete'
  })
}
