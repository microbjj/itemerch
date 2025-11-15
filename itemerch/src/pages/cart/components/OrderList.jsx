import { OrderItem } from './OrderItem'

export function OrderList({ cartList, totalPrice, authUser, onCleanCart }) {
    return (
        <div className="w-3/5">
            {cartList.length > 0 && (
                <h2 className="mb-2 px-4 font-semibold">Ваш заказ</h2>
            )}
            <hr className="mb-4 w-full text-slate-400" />
            <div className="px-4">
                <div className="mb-2 flex flex-col gap-y-4 text-sm">
                    {cartList.length > 0 ? (
                        cartList.map((product) => (
                            <OrderItem key={product._id} product={product} />
                        ))
                    ) : (
                        <div>Корзина пуста. Добавьте хотя бы один товар</div>
                    )}
                </div>
            </div>
            <hr className="mt-4 mb-2 w-full text-slate-400" />
            {!authUser && cartList.length > 0 && (
                <div className="px-4 text-end text-sm text-red-800">
                    Войдите чтобы оформить заказ
                </div>
            )}
            {totalPrice > 0 ? (
                <div className="px-4 py-2 text-end" onClick={onCleanCart}>
                    Итого: {totalPrice} RUB
                </div>
            ) : (
                ''
            )}
        </div>
    )
}
