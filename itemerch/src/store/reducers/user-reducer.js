import { USER_ACTION } from '../actions'
import { ROLE } from '@/utils/constants'

const initState = {
    username: null,
    role: ROLE.GUEST,
    profile: {},
    isLoading: false,
}

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case USER_ACTION.SET_USER: {
            return {
                ...state,
                ...action.payload,
            }
        }
        case USER_ACTION.USER_LOGOUT: {
            return initState
        }
        case USER_ACTION.SET_USER_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case USER_ACTION.ADD_USER_FAVORITE: {
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            }
        }
        case USER_ACTION.REMOVE_USER_FAVORITE: {
            return {
                ...state,
                favorites: state.favorites.filter(
                    (itemId) => itemId !== action.payload,
                ),
            }
        }
        default:
            return state
    }
}
