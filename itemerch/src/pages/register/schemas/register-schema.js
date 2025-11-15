import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    username: yup
        .string()
        .required('Заполните имя пользователя')
        .min(4, 'Минимум 4 символа')
        .max(15, 'Максимум 15 символов')
        .matches(/\w+$/, 'Допускаются только буквы и цифры'),
    password: yup
        .string()
        .required('Заполните пароль')
        .min(6, 'Минимум 6 символов')
        .max(30, 'Максимум 30 символов')
        .matches(
            /^[\w#%!*-_]+$/,
            'Допускаются только буквы, цифры и спецсимволы # % ! * - _',
        ),
    confirmPassword: yup
        .string()
        .required('Введите пароль повторно')
        .oneOf([yup.ref('password'), null], 'Пароли не совпадают'),
})
