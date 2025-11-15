export function ProductInfo({ name, description, price, id, stock }) {
    return (
        <div className="mb-4 flex flex-col gap-y-2">
            <div className="mb-4 text-start">
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-sm text-gray-600">Артикул: {id}</p>
                <p className="text-sm text-gray-600">В наличии: {stock}</p>
            </div>
            <p className="font-bold">{price} ₽</p>
            <p className="text-sm">{description}</p>
        </div>
    )
}
