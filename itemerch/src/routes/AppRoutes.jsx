import { Route, Routes } from 'react-router'
import { PrivateRoute } from '../components'
import {
    Auth,
    Admin,
    Cart,
    Favorites,
    Home,
    NotFound,
    Password,
    Product,
    Profile,
    Register,
} from '../pages'

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/register" element={<Register />} />
            <Route path="/products/:id" element={<Product />} />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route
                path="/profile/password"
                element={
                    <PrivateRoute>
                        <Password />
                    </PrivateRoute>
                }
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
