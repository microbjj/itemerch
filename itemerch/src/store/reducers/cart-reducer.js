import { CART_ACTION } from '../actions'

const initialCartState = []

export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case CART_ACTION.ADD_CART: {
            const newItem = action.payload
            const existingItems = state.find((item) => item._id === newItem._id)

            if (existingItems) {
                return state.map((item) =>
                    item._id === newItem._id
                        ? {
                              ...item,
                              quantity: item.quantity + newItem.quantity,
                          }
                        : item,
                )
            }
            return [...state, { ...newItem, quantity: newItem.quantity || 1 }]
        }
        case CART_ACTION.CLEAN_CART: {
            return initialCartState
        }
        case CART_ACTION.INCREASE_QUANTITY: {
            const { id } = action.payload
            return state.map((item) =>
                item._id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item,
            )
        }
        case CART_ACTION.DECREASE_QUANTITY: {
            const { id } = action.payload
            return state.map((item) =>
                item._id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item,
            )
        }
        case CART_ACTION.DELETE_CART_ITEM: {
            const { id } = action.payload
            return state.filter((item) => item._id !== id)
        }
        default:
            return state
    }
}
