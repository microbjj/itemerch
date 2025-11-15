import * as yup from 'yup'

export const addProductScheme = yup.object().shape({
    name: yup.string().required('Название обязательно'),
    description: yup.string().required('Описание обязательно'),
    price: yup
        .number()
        .required('Цена обязательна')
        .positive('Цена должна быть положительной'),
    stock: yup
        .number()
        .required('Количество на складе обязательно')
        .min(0, 'Минимум 0'),
    imageUrl1: yup
        .string()
        .url('Неверный формат ссылки')
        .required('Ссылка обязательна'),
    imageUrl2: yup
        .string()
        .url('Неверный формат ссылки')
        .required('Ссылка обязательна'),
    imageUrl3: yup
        .string()
        .url('Неверный формат ссылки')
        .required('Ссылка обязательна'),
    imageUrl4: yup
        .string()
        .url('Неверный формат ссылки')
        .required('Ссылка обязательна'),
    categoryId: yup.string().required('Категория обязательна'),
})
