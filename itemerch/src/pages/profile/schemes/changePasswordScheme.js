import * as yup from 'yup'

export const changePasswordScheme = yup.object().shape({
    currentPassword: yup
        .string()
        .required('Введите текущий пароль')
        .min(6, 'Минимум 6 символов'),
    newPassword: yup
        .string()
        .required('Заполните пароль')
        .min(6, 'Минимум 6 символов')
        .max(30, 'Максимум 30 символов')
        .matches(
            /^[\w#%!*-_]+$/,
            'Допускаются только буквы, цифры и спецсимволы # % ! * - _',
        ),
    confirmNewPassword: yup
        .string()
        .required('Введите пароль повторно')
        .oneOf([yup.ref('newPassword'), null], 'Пароли не совпадают'),
})
