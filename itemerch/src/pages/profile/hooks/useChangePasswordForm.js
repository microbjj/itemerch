import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { changePassword } from '@/api'
import { changePasswordScheme } from '../schemes'

export function useChangePasswordForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const form = useForm({
        resolver: yupResolver(changePasswordScheme),
    })

    const changeSuccess = () => {
        form.reset()
        setSuccess(true)
        setTimeout(() => setSuccess(false), 2000)
    }

    const onSavePassword = async ({ currentPassword, newPassword }) => {
        try {
            setIsLoading(true)
            const { error } = await changePassword(currentPassword, newPassword)

            if (error) {
                form.setError('currentPassword', {
                    type: 'server',
                    message: error,
                })
                return
            }
            changeSuccess()
        } finally {
            setIsLoading(false)
        }
    }

    return { ...form, onSavePassword, isLoading, success }
}
