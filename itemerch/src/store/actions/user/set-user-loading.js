import { USER_ACTION } from './action-type'

export const setUserLoading = (payload) => ({
    type: USER_ACTION.SET_USER_LOADING,
    payload,
})
