import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserProfile } from '@/store/selectors'
import { profileScheme } from '../schemes'
import { logoutUser } from '@/store/actions'
import { useNavigate } from 'react-router'

export function useProfileForm() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const profile = useSelector(selectUserProfile)

    const form = useForm({
        defaultValues: {
            firstName: profile.firstName || '',
            email: profile.email || '',
            phone: profile.phone || '',
        },
        resolver: yupResolver(profileScheme),
    })

    const onLogout = () => {
        dispatch(logoutUser())
        navigate('/')
    }

    const onSaveForm = (formData) => {}

    return {
        ...form,
        profile,
        onSaveForm,
        onLogout,
    }
}
