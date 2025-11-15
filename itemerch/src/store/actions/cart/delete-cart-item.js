import { CART_ACTION } from './action-type'

export const deleteCartItem = (id) => {
    return {
        type: CART_ACTION.DELETE_CART_ITEM,
        payload: { id },
    }
}
