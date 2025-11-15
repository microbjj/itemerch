import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserFavorites, selectUserUsername } from '@/store/selectors'
import { setFavorites } from '@/store/actions'

export function useUserFavorites() {
    const username = useSelector(selectUserUsername)
    const dispatch = useDispatch()
    const favoritesList = useSelector(selectUserFavorites)

    useEffect(() => {
        if (!username) return
        dispatch(setFavorites())
    }, [username, favoritesList])
}
