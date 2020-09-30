import  request from '../utils/request/request';

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'get'
    })
}

export function register(data) {
    return request({
        url: '/regist',
        method: 'post',
        data
    })
}