import { Link } from 'react-router'
import { AiOutlineShopping } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { selectCart } from '@/store/selectors'

export const CartIcon = () => {
    const cart = useSelector(selectCart)
    const count = cart.length

    return (
        <Link to="/cart" className="relative hover:text-fuchsia-800">
            <AiOutlineShopping title="Корзина" className="text-2xl" />
            {count > 0 && (
                <span className="absolute -top-1 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-700 via-purple-500 to-indigo-500 text-xs text-white">
                    {Math.min(count, 99)}
                </span>
            )}
        </Link>
    )
}
