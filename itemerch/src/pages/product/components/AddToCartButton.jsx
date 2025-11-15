export function AddToCartButton({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="hover:bg-dark h-9 cursor-pointer bg-black px-8 text-sm text-white"
        >
            В корзину
        </button>
    )
}
