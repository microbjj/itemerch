import { request } from '@/api/request'

export function changePassword(currentPassword, newPassword) {
    return request({
        url: '/user/update/password',
        method: 'POST',
        data: {
            currentPassword,
            newPassword,
        },
    })
}
