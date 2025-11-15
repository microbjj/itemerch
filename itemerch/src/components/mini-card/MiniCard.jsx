import { Link } from 'react-router'

export const MiniCard = ({ product }) => {
    const { _id, name, price, imageUrl } = product

    return (
        <Link
            to={`/products/${_id}`}
            className="flex w-full flex-col items-center py-2 duration-200 hover:scale-105"
        >
            <div className="group relative h-64 w-full overflow-hidden rounded-md">
                <img
                    alt={name}
                    src={imageUrl[0]}
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-100 transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                    alt={name}
                    src={imageUrl[1]}
                    className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
            </div>
            <div className="flex flex-col items-center py-3 text-center">
                <div className="font-semibold text-gray-800">{name}</div>
                <div className="font-semibold text-gray-800">{price} ₽</div>
            </div>
        </Link>
    )
}
