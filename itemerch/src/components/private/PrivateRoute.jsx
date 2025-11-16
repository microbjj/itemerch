import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'
import { Loader } from '@/components'
import { selectUserLoading } from '@/store/selectors'

export function PrivateRoute({ children, roles }) {
    const isLoading = useSelector(selectUserLoading)
    const user = useSelector((state) => state.user)

    if (isLoading) {
        return <Loader />
    }

    const access = roles.includes(user.role)

    if (!user || !access) {
        return <Navigate to="/" replace />
    }

    return children
}
