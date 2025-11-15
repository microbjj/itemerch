import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerUser } from '@/store/actions'
import { registerSchema } from '../schemas/register-schema'

export function useRegisterForm() {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const form = useForm({
        resolver: yupResolver(registerSchema),
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async ({ username, password }) => {
        const { error } = await dispatch(registerUser(username, password))

        if (error) {
            form.setError('confirmPassword', {
                type: 'server',
                message: error,
            })
            setIsLoading(false)
            return
        }

        navigate('/')
    }

    return { ...form, onSubmit, isLoading }
}
