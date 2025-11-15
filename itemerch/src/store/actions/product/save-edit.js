import { PRODUCT_ACTION } from './action-type'
import { request } from '@/utils'

export const saveEdit = (product) => {
    return async (dispatch) => {
        // const updated = await server.updateProduct(product)

        const response = await request({
            url: `/products/${product._id}`,
            method: 'PATCH',
            data: product,
        })

        if (!response) {
            return console.log('error')
        }

        dispatch({
            type: PRODUCT_ACTION.UPDATE_PRODUCT,
            payload: product,
        })
    }
}
