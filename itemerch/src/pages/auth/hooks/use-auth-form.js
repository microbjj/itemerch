import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { authSchema } from '../schemas/auth-schema'
import { loginUser } from '@/store/actions/user/login-user'

export function useAuthForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const form = useForm({
        resolver: yupResolver(authSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    })

    const onSubmit = async ({ username, password }) => {
        const { error } = await dispatch(loginUser(username, password))

        if (error) {
            form.setError('password', {
                type: 'server',
                message: error,
            })
            return
        }

        navigate('/')
    }

    return { ...form, onSubmit }
}
