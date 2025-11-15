import { FAVORITE_ACTION, USER_ACTION } from '@/store/actions'
import { updateFavorite } from '@/api'

export const toggleFavorite = (productId, isFavorite) => async (dispatch) => {
    dispatch({ type: FAVORITE_ACTION.SET_FAVORITES_LOADING, payload: true })

    const { error } = await updateFavorite(productId)

    if (error) {
        console.error('Ошибка при обновлении избранного:', error)
        dispatch({
            type: FAVORITE_ACTION.SET_FAVORITES_LOADING,
            payload: false,
        })
        return
    }

    dispatch({
        type: isFavorite
            ? USER_ACTION.REMOVE_USER_FAVORITE
            : USER_ACTION.ADD_USER_FAVORITE,
        payload: productId,
    })

    dispatch({ type: FAVORITE_ACTION.SET_FAVORITES_LOADING, payload: false })
}
