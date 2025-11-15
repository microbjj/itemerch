import { addCart, setProductById } from '@/store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { selectProductLoading } from '@/store/selectors'

export function useProduct(id) {
    const dispatch = useDispatch()

    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(null)

    const isLoading = useSelector(selectProductLoading)

    useEffect(() => {
        const loadProduct = async () => {
            const { data } = await dispatch(setProductById(id))
            setProduct(data)
            setSelectedImage(data.imageUrl[0])
        }
        void loadProduct()
    }, [id])

    const onAddCart = () => {
        dispatch(addCart({ ...product, quantity }))
    }

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleIncrease = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1)
        }
    }

    return {
        product,
        quantity,
        selectedImage,
        setSelectedImage,
        isLoading,
        onAddCart,
        handleDecrease,
        handleIncrease,
    }
}
