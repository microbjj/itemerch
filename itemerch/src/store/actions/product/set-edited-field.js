import { PRODUCT_ACTION } from './action-type'

export const setEditedField = (field, value) => ({
    type: PRODUCT_ACTION.SET_EDITED_FIELD,
    payload: { field, value },
})
