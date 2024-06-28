import request from '@/utils/request'

const VAT_API = import.meta.env.VITE_VAT_API

export const reqGetArticleList = params => {
  return request({
    url: VAT_API + '/articles',
    method: 'get',
    params,
  })
}

export const reqGetArticleDetail = articleId => {
  return request({
    url: VAT_API + `/articles/${articleId}`,
    method: 'get',
  })
}

export const reqEditArticle = data => {
  return request({
    url: VAT_API + `/articles/${articleId}`,
    method: 'post',
    data,
  })
}

export const reqDeleteArticle = articleId => {
  return request({
    url: VAT_API + `/articles/${articleId}`,
    method: 'delete',
  })
}
