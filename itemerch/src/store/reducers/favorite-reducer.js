import { FAVORITE_ACTION } from '../actions'

const initFavoriteState = {
    list: [],
    isLoading: false,
}

export const favoriteReducer = (state = initFavoriteState, action) => {
    switch (action.type) {
        case FAVORITE_ACTION.SET_FAVORITES_LOADING: {
            return {
                ...state,
                isLoading: action.payload,
            }
        }
        case FAVORITE_ACTION.SET_FAVORITES: {
            return {
                ...state,
                list: action.payload,
            }
        }
        case FAVORITE_ACTION.CLEAN_FAVORITES: {
            return initFavoriteState
        }

        default:
            return state
    }
}
