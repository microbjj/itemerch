import { request } from '@/utils'

export async function updateFavorite(productId) {
    return request({
        url: `/user/favorites/${productId}`,
        method: 'POST',
    })
}
