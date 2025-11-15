import { CART_ACTION } from './action-type'

export const increaseQuantity = (id) => ({
    type: CART_ACTION.INCREASE_QUANTITY,
    payload: { id },
})
