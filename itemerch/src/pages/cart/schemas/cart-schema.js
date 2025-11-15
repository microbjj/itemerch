import * as yup from 'yup'

export const cartSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'Имя должно содержать минимум 2 символа')
        .max(50, 'Имя не должно превышать 50 символов')
        .required('Заполните имя пользователя'),
    phone: yup
        .string()
        .matches(/^\+8\d{10}$/, 'Введите номер в формате +81234567890')
        .required('Телефон обязателен'),
    email: yup
        .string()
        .email('Введите корректный email')
        .required('Заполните почту'),
    city: yup.string().required('Введите город'),
    delivery: yup.string().required('Выберите способ доставки'),
    payment: yup.string().required('Выберите метод оплаты'),
})
