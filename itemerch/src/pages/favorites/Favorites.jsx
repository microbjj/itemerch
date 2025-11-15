import { useSelector } from 'react-redux'
import { useUserFavorites } from './hooks/'
import { MiniCard, Loader } from '@/components'
import {
    selectUserSession,
    selectFavorites,
    selectFavoritesLoading,
    selectUserUsername,
} from '@/store/selectors'

export function Favorites() {
    const username = useSelector(selectUserUsername)
    const favorites = useSelector(selectFavorites)
    const isLoading = useSelector(selectFavoritesLoading)

    useUserFavorites()

    if (isLoading) {
        return <Loader />
    }

    if (!username) {
        return (
            <p className="mt-10 text-center">
                Войдите чтобы добавлять товары в избранное
            </p>
        )
    }

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {favorites.length > 0 ? (
                favorites.map((item) => (
                    <MiniCard key={item._id} product={item} />
                ))
            ) : (
                <p className="mt-10 text-center">Нет избранных товаров</p>
            )}
        </div>
    )
}
