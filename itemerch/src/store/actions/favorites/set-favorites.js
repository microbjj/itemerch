import { FAVORITE_ACTION } from './action-types'
import { getFavorites } from '@/api'

export const setFavorites = () => async (dispatch) => {
    try {
        dispatch({
            type: FAVORITE_ACTION.SET_FAVORITES_LOADING,
            payload: true,
        })

        const { data, error } = await getFavorites()

        if (error) {
            console.error(error)
            return
        }

        dispatch({
            type: FAVORITE_ACTION.SET_FAVORITES,
            payload: data,
        })
    } finally {
        dispatch({
            type: FAVORITE_ACTION.SET_FAVORITES_LOADING,
            payload: false,
        })
    }
}
