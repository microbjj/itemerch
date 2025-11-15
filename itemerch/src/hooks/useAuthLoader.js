import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authUser } from '@/store/actions'

export function useAuthLoader() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(authUser())
    }, [])
}
