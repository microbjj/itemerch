import { request } from '@/api/request'

export async function addProduct(productData) {
    return request({
        url: '/products',
        method: 'POST',
        data: productData,
    })
}
