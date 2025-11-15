import { Link } from 'react-router'
import { useDispatch } from 'react-redux'
import { CiSquareRemove } from 'react-icons/ci'
import { CgMathMinus, CgMathPlus } from 'react-icons/cg'
import {
    decreaseQuantity,
    deleteCartItem,
    increaseQuantity,
} from '@/store/actions'

export const OrderItem = ({ product }) => {
    const dispatch = useDispatch()

    const {
        _id: id,
        name,
        description,
        price,
        quantity,
        imageUrl,
        stock,
    } = product

    const handleIncrease = () => {
        if (quantity < stock) {
            dispatch(increaseQuantity(id))
        }
    }
    const handleDecrease = () => {
        if (quantity > 1) {
            dispatch(decreaseQuantity(id))
        }
    }

    const handleDeleteItem = () => {
        dispatch(deleteCartItem(id))
    }

    return (
        <div className="flex items-center justify-between select-none">
            <div className="flex gap-x-4">
                <Link to={`/products/${id}`} target="_blank">
                    <img
                        src={imageUrl}
                        alt="view"
                        width="80px"
                        className="object-contain object-top"
                    />
                </Link>
                <div className="flex flex-col justify-start text-sm">
                    <p className="mt-1">{name} </p>
                    <p>Артикул: {id} </p>
                    <p>{description} </p>
                </div>
            </div>
            <div className="flex gap-x-8">
                <div className="flex items-center gap-x-2">
                    <CgMathMinus
                        onClick={handleDecrease}
                        size="16px"
                        className="cursor-pointer"
                    />
                    <span className="text-lg">{quantity}</span>{' '}
                    <CgMathPlus
                        onClick={handleIncrease}
                        size="16px"
                        className="cursor-pointer"
                    />
                </div>
                <div className="flex w-25 items-center justify-end font-semibold">
                    {price} RUB
                </div>
                <button>
                    <CiSquareRemove
                        onClick={handleDeleteItem}
                        size="28px"
                        className="cursor-pointer"
                    />
                </button>
            </div>
        </div>
    )
}
