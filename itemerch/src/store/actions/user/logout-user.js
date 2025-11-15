import { USER_ACTION } from './action-type'
import { logout } from '@/api'
import { cleanCart, cleanFavorites } from '@/store/actions'

export const logoutUser = () => async (dispatch) => {
    const { error } = await logout()
    if (error) {
        return console.log('Ошибка при выходе')
    }
    dispatch(cleanFavorites())
    dispatch(cleanCart())
    dispatch({
        type: USER_ACTION.USER_LOGOUT,
    })
}
