import { request } from '@/api/request'

export function login(username, password) {
    return request({
        url: '/auth/login',
        method: 'POST',
        data: { username, password },
    })
}
