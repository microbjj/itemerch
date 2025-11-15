import { PRODUCT_ACTION } from '@/store/actions'
import { getProduct } from '@/api'

export const setProductById = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_ACTION.SET_PRODUCT_LOADING,
            payload: true,
        })

        const { data, error } = await getProduct(id)

        if (error) {
            return console.error(error)
        }

        if (data) {
            return { data }
        }
    } finally {
        dispatch({
            type: PRODUCT_ACTION.SET_PRODUCT_LOADING,
            payload: false,
        })
    }
}
