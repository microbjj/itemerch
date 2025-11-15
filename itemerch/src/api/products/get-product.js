import { request } from '@/api/request'

export function getProduct(id) {
    return request({
        url: `/products/${id}`,
    })
}
