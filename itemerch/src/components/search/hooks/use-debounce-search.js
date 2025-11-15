import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { setProductSearch } from '@/store/actions'

export function useDebounceSearch(initialValue = '', delay = 500) {
    const [searchTerm, setSearchTerm] = useState(initialValue)
    const [debouncedTerm, setDebouncedTerm] = useState(initialValue)
    const dispatch = useDispatch()

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedTerm(searchTerm)
        }, delay)

        return () => clearTimeout(handler)
    }, [searchTerm, delay])

    useEffect(() => {
        dispatch(setProductSearch(debouncedTerm))
    }, [debouncedTerm, dispatch])

    return { searchTerm, setSearchTerm }
}
