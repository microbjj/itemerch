import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '@/store/actions'
import {
    selectUserFavorites,
    selectFavoritesLoading,
    selectUserUsername,
} from '@/store/selectors'

export function useFavorites(productId) {
    const dispatch = useDispatch()

    const user = useSelector(selectUserUsername)
    const favoritesList = useSelector(selectUserFavorites) || []
    const isLoading = useSelector(selectFavoritesLoading)

    const isFavorite = useMemo(() => {
        if (!favoritesList || !productId) return false
        return favoritesList.some(
            (itemId) => String(itemId) === String(productId),
        )
    }, [favoritesList])

    const handleToggle = () => {
        if (!user || !productId || isLoading) return

        dispatch(toggleFavorite(productId, isFavorite))
    }

    return { isFavorite, handleToggle }
}
