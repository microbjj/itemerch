import { PRODUCT_ACTION } from '../actions'

const initialState = {
    list: [],
    isLoading: false,
    editingId: null,
    editedProduct: {},
    isLoaded: false,
    search: null,
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ACTION.SET_PRODUCTS:
            return {
                ...state,
                list: action.payload,
                isLoading: false,
                isLoaded: true,
            }
        case PRODUCT_ACTION.SET_PRODUCT_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case PRODUCT_ACTION.SET_PRODUCT_LOADED:
            return {
                ...state,
                isLoaded: action.payload,
            }
        case PRODUCT_ACTION.START_EDIT:
            return {
                ...state,
                editingId: action.payload._id,
                editedProduct: action.payload,
            }

        case PRODUCT_ACTION.CANCEL_EDIT:
            return { ...state, editingId: null, editedProduct: {} }

        case PRODUCT_ACTION.SET_EDITED_FIELD:
            return {
                ...state,
                editedProduct: {
                    ...state.editedProduct,
                    [action.payload.field]: action.payload.value,
                },
            }

        case PRODUCT_ACTION.UPDATE_PRODUCT:
            return {
                ...state,
                list: state.list.map((p) =>
                    p._id === action.payload._id ? action.payload : p,
                ),
                editingId: null,
                editedProduct: {},
            }
        case PRODUCT_ACTION.DELETE_PRODUCT:
            return {
                ...state,
                list: state.list.filter((p) => p._id !== action.payload),
            }
        case PRODUCT_ACTION.SET_PRODUCT_SEARCH:
            return {
                ...state,
                search: action.payload,
            }
        default:
            return state
    }
}
