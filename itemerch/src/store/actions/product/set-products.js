import { PRODUCT_ACTION } from './action-type'
import { getProducts } from '@/api'

export const setProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_ACTION.SET_PRODUCT_LOADING,
        payload: true,
    })

    const { data, error } = await getProducts()
    if (error) {
        return console.error(error)
    }
    dispatch({ type: PRODUCT_ACTION.SET_PRODUCTS, payload: data })
}
