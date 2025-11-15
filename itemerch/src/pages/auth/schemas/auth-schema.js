import * as yup from 'yup'

export const authSchema = yup.object().shape({
    username: yup
        .string()
        .required('Заполните имя пользователя')
        .matches(/\w+$/, 'Допускаются только буквы и цифры'),
    password: yup.string().required('Заполните пароль'),
})
