import { request } from '@/api/request'

export function logout() {
    return request({
        url: '/auth/logout',
        method: 'POST',
    })
}
