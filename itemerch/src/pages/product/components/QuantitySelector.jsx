export function QuantitySelector({ quantity, onDecrease, onIncrease }) {
    return (
        <div className="flex items-center justify-center border">
            <button onClick={onDecrease} className="h-8 cursor-pointer px-3">
                −
            </button>
            <span className="w-8 text-center">{quantity}</span>
            <button onClick={onIncrease} className="h-8 cursor-pointer px-3">
                +
            </button>
        </div>
    )
}
