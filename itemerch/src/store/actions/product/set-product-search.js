import { PRODUCT_ACTION } from './action-type'

export const setProductSearch = (value) => ({
    type: PRODUCT_ACTION.SET_PRODUCT_SEARCH,
    payload: value,
})
