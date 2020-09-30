import  request  from "../utils/request/request"

export function list(pages, size) {
  return request({
    url: '/syslog/list',
    method: 'get',
    params: {
      pages:pages,
      size:size
    }
  })
}