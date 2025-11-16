import { USER_ACTION } from './action-type'
import { setUserLoading } from '@/store/actions'
import { fetchSession } from '@/api'

export const authUser = () => async (dispatch) => {
    dispatch(setUserLoading(true))

    try {
        const { data, error } = await fetchSession()

        if (error) {
            dispatch({ type: USER_ACTION.USER_LOGOUT })
        }

        dispatch({ type: USER_ACTION.SET_USER, payload: data })
    } finally {
        dispatch(setUserLoading(false))
    }
}
