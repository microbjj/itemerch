import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { addProductScheme } from '../schemas/addProductScheme'
import { setProductLoaded } from '@/store/actions'
import { useEffect, useState } from 'react'
import { addProduct } from '@/api'

export const useAddProductForm = () => {
    const [success, setSuccess] = useState(false)
    const dispatch = useDispatch()
    const form = useForm({
        defaultValues: {
            name: '',
            description: '',
            price: 0,
            stock: 1,
        },
        resolver: yupResolver(addProductScheme),
    })

    useEffect(() => {
        setTimeout(() => setSuccess(false), 3000)
    }, [success])

    const onSubmit = async (dataForm) => {
        const imageUrl = [
            dataForm.imageUrl1,
            dataForm.imageUrl2,
            dataForm.imageUrl3,
            dataForm.imageUrl4,
        ]
        const productData = { ...dataForm, imageUrl }

        const { error } = await addProduct(productData)
        if (error) {
            form.setError('imageUrl4', {
                type: 'server',
                message: error,
            })
            return
        }

        dispatch(setProductLoaded(false))
        setSuccess(true)
    }

    return { ...form, onSubmit, success }
}
