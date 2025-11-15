import { useParams } from 'react-router'
import { FaRegHeart } from 'react-icons/fa'
import { useFavorites, useProduct } from './hooks'
import { Loader } from '@/components'
import {
    AddToCartButton,
    ProductGallery,
    ProductInfo,
    QuantitySelector,
} from './components'

export function Product() {
    const { id } = useParams()
    const { isFavorite, handleToggle } = useFavorites(id)
    const {
        product,
        quantity,
        selectedImage,
        setSelectedImage,
        isLoading,
        handleDecrease,
        handleIncrease,
        onAddCart,
    } = useProduct(id)

    if (isLoading) {
        return <Loader />
    }

    if (!product) {
        return <p className="mt-10">Товар не найден</p>
    }

    const { name, description, price, stock, imageUrl } = product

    return (
        <div className="flex gap-x-8">
            <ProductGallery
                imageUrl={imageUrl}
                selectedImage={selectedImage || imageUrl[0]}
                onSelect={setSelectedImage}
            />

            <div className="flex flex-col gap-y-2">
                <ProductInfo
                    id={id}
                    description={description}
                    name={name}
                    price={price}
                    stock={stock}
                />
                <div className="flex items-center justify-center gap-x-4">
                    <QuantitySelector
                        quantity={quantity}
                        onDecrease={handleDecrease}
                        onIncrease={handleIncrease}
                    />
                    <AddToCartButton onClick={onAddCart} />
                    <FaRegHeart
                        fill={isFavorite ? 'red' : 'black'}
                        onClick={handleToggle}
                        className="cursor-pointer text-xl"
                    />
                </div>
            </div>
        </div>
    )
}
