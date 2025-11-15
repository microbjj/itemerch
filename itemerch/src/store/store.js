import { configureStore } from '@reduxjs/toolkit'
import {
    cartReducer,
    favoriteReducer,
    productReducer,
    userReducer,
} from './reducers'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    product: productReducer,
    favorites: favoriteReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})
