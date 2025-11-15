import { setUserLoading, USER_ACTION } from '@/store/actions'
import { login } from '@/api'

export const loginUser = (username, password) => async (dispatch) => {
    dispatch(setUserLoading(true))

    try {
        const { data, error } = await login(username, password)

        if (error) {
            return { error }
        }

        dispatch({ type: USER_ACTION.SET_USER, payload: data })
        return { data }
    } finally {
        dispatch(setUserLoading(false))
    }
}
