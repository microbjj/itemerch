import { PRODUCT_ACTION } from './action-type'
import { request } from '@/utils'

export const deleteProductById = (id) => {
    return async (dispatch) => {
        try {
            const response = await request({
                url: `/products/${id}`,
                method: 'DELETE',
            })
            if (response) {
                dispatch({
                    type: PRODUCT_ACTION.DELETE_PRODUCT,
                    payload: id,
                })
            }
        } catch (error) {
            console.log(`Ошибка при удалении товара ${id}: `, error)
        }
    }
}
