import { setUserLoading, USER_ACTION } from '@/store/actions'
import { register } from '@/api'
import { getRandomAvatar } from '@/utils/get-random-avatar'

export const registerUser = (data) => async (dispatch) => {
    dispatch(setUserLoading(true))

    const { username, password, confirmPassword, ...info } = data

    const profile = {
        ...info,
        avatar: getRandomAvatar(),
    }

    try {
        const { data, error } = await register(username, password, profile)

        if (error) {
            return { error }
        }

        dispatch({ type: USER_ACTION.SET_USER, payload: data })
        return { data }
    } finally {
        dispatch(setUserLoading(false))
    }
}
