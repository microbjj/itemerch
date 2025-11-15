import * as yup from 'yup'

export const profileScheme = yup.object().shape({
    firstName: yup.string().min(3).max(12),
    email: yup.string().email(),
    phone: yup.string(),
})
