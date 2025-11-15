import { request } from '@/api/request'

export function getFavorites() {
    return request({
        url: '/user/favorites',
    })
}
