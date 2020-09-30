import request from '../utils/request/request'

export function list(pages, size) {
    return request({
        url: '/tag/list',
        method: 'GET',
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

export function deletee(id) {
    return request({
        url: `/tag/delete/${id}`,
        method: 'DELETE'
    })
}