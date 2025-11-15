import { PRODUCT_ACTION } from './action-type'

export const startEdit = (product) => ({
    type: PRODUCT_ACTION.START_EDIT,
    payload: product,
})
