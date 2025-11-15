import { useEffect } from 'react'
import { setProducts } from '@/store/actions'
import { selectProductLoaded } from '@/store/selectors'
import { useDispatch, useSelector } from 'react-redux'

export function useProducts() {
    const dispatch = useDispatch()
    const isLoaded = useSelector(selectProductLoaded)

    useEffect(() => {
        if (!isLoaded) {
            dispatch(setProducts())
        }
    }, [isLoaded])
}
