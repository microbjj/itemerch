import { PRODUCT_ACTION } from './action-type'

export const setProductLoaded = (loading) => ({
    type: PRODUCT_ACTION.SET_PRODUCT_LOADED,
    payload: loading,
})
