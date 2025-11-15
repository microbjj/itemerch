import { request } from '@/api/request'

export function getUsers() {
    return request({
        url: '/users',
    })
}
