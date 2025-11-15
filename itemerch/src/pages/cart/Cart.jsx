import { Input } from '@/components'
import { Modal } from './components/Modal'
import { RadioForm } from './components/RadioForm'
import { OrderList } from './components/OrderList'
import { useCartForm } from './hooks/useCartForm'
import { listDelivery, listPayments } from '@/utils/constants'

export function Cart() {
    const {
        register,
        handleSubmit,
        onSubmit,
        formState: { errors, isValid },
        onCleanCart,
        totalPrice,
        cartList,
        authUser,
        isModalOpen,
        setModalOpen,
        formData,
    } = useCartForm()

    return (
        <div className="mt-4 flex w-full gap-x-8">
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <h2 className="text-lg font-semibold">Заказ отправлен!</h2>
                <p>Способ доставки: {formData?.delivery}</p>
                <p>Город: {formData?.city}</p>
                <p>Оплата: {formData?.payment}</p>
            </Modal>

            <OrderList
                authUser={authUser}
                cartList={cartList}
                onCleanCart={onCleanCart}
                totalPrice={totalPrice}
            />
            {authUser && (
                <form onSubmit={handleSubmit(onSubmit)} className="w-2/5">
                    <div className="mb-6">
                        <p className="mb-3 font-semibold">Контактные данные</p>
                        <div className="flex w-full flex-col text-sm">
                            <Input
                                title="Фамилия и Имя"
                                id="name"
                                register={register}
                                error={errors.name}
                                component="cart"
                                placeholder="Имя и фамилия получателя"
                            />
                            <Input
                                title="Телефон для связи"
                                id="phone"
                                register={register}
                                error={errors.phone}
                                component="cart"
                                placeholder="+7 (999) 999-99-99"
                            />
                            <Input
                                title="E-mail для получения чека"
                                id="email"
                                type="email"
                                register={register}
                                error={errors.email}
                                component="cart"
                                placeholder="example@mail.ru"
                            />
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="mb-2 font-semibold">
                            Способ доставки
                        </div>

                        <div className="flex flex-col text-sm">
                            <Input
                                title="Город"
                                id="city"
                                register={register}
                                error={errors.city}
                                component="cart"
                                placeholder="Moscow"
                            />
                            <RadioForm
                                id="delivery"
                                register={register}
                                error={errors.delivery}
                                list={listDelivery}
                            />
                        </div>
                    </div>
                    <div className="mb-2 font-semibold">Метод оплаты</div>

                    <div className="mb-6 flex flex-col gap-y-2 text-sm">
                        <RadioForm
                            id="payment"
                            register={register}
                            error={errors.payment}
                            list={listPayments}
                        />
                    </div>
                    <button
                        disabled={cartList.length === 0}
                        className="hover:bg-dark disabled:bg-dark h-12 w-1/2 cursor-pointer rounded bg-black text-white duration-100 hover:cursor-default"
                    >
                        Перейти к оплате
                    </button>
                </form>
            )}
        </div>
    )
}
