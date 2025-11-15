import { setUserLoading, USER_ACTION } from '@/store/actions'
import { register } from '@/api'
import { getRandomAvatar } from '@/utils/get-random-avatar'

export const registerUser = (username, password) => async (dispatch) => {
    dispatch(setUserLoading(true))

    const info = {
        profile: {
            avatar: getRandomAvatar(),
        },
    }

    try {
        const { data, error } = await register(username, password, info)

        if (error) {
            return { error }
        }

        dispatch({ type: USER_ACTION.SET_USER, payload: data })
        return { data }
    } finally {
        dispatch(setUserLoading(false))
    }
}
