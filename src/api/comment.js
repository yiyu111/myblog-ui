import request from '../utils/request/request'


export function listByBlogId(id) {
  return request({
    url: `/comment/blog/${id}`,
    method: 'get',
  })
}

export function listByUserId(id) {
  return request({
    url: `/comment/blog/${id}` ,
    method: 'get',
  })
}

export function create(data) {
  return request({
    url: '/comment/create',
    method: 'post',
    data
  })
}

export function deletee(id) {
  return request({
    url: `/comment/delete/${id}`
  })
}
