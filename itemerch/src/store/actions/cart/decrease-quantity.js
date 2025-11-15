import { CART_ACTION } from './action-type'

export const decreaseQuantity = (id) => ({
    type: CART_ACTION.DECREASE_QUANTITY,
    payload: { id },
})
