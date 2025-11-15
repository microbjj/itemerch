import { request } from '@/api/request'

export const register = (username, password, profile) => {
    return request({
        url: '/auth/register',
        method: 'POST',
        data: { username, password, profile },
    })
}
