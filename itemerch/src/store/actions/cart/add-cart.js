import { CART_ACTION } from './action-type'

export const addCart = (product) => ({
    type: CART_ACTION.ADD_CART,
    payload: product,
})
