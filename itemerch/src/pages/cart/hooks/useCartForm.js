import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { cleanCart } from '@/store/actions'
import { cartSchema } from '../schemas/cart-schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectUserProfile,
    selectCart,
    selectUserUsername,
} from '@/store/selectors'

export function useCartForm() {
    const [isModalOpen, setModalOpen] = useState(false)
    const [formData, setFormData] = useState(null)

    const profile = useSelector(selectUserProfile)
    const cartList = useSelector(selectCart)
    const authUser = useSelector(selectUserUsername)

    const dispatch = useDispatch()

    const form = useForm({
        resolver: yupResolver(cartSchema),
        defaultValues: {
            name: profile.firstName || '',
            phone: profile.phone || '',
            email: profile.email || '',
            city: '',
            delivery: '',
            payment: '',
        },
    })

    const onCleanCart = () => {
        dispatch(cleanCart())
    }

    const totalPrice = useMemo(() => {
        return cartList
            .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
            .toFixed(0)
    }, [cartList])

    const onSubmit = (dataForm) => {
        setFormData(dataForm)
        setModalOpen(true)
        dispatch(cleanCart())
        form.reset()
    }

    return {
        ...form,
        onCleanCart,
        onSubmit,
        totalPrice,
        cartList,
        authUser,
        isModalOpen,
        setModalOpen,
        formData,
    }
}
