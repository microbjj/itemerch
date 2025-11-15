import { request } from '@/api/request'

export function getProducts() {
    return request({
        url: '/products',
    })
}
