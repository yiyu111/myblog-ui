import request from '../utils/request/request'


export function list(pages, size) {
  return request({
    url: '/blog/list',
    method: 'get',
    params: {
      pages: pages,
      size: size
    }
  })
}

export function create(data) {
  return request({
    url: '/blog/create',
    method: 'post',
    data
  })
}

export function findByid(id) {
  return request({
    url: `/blog/${id}`,
    method: 'get'

  })
}

export function deletee(id) {
  return request({
    url: `/blog/delete/${id}`,
    method: 'DELETE'
  })
}