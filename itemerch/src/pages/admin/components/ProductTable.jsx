import { Loader } from '@/components'
import { ProductRow } from './ProductRow'
import { useDispatch, useSelector } from 'react-redux'
import {
    selectProducts,
    selectProductLoading,
    selectEditedProduct,
} from '@/store/selectors'
import { useProducts } from '../../home/hooks'
import {
    startEdit,
    saveEdit,
    cancelEdit,
    deleteProductById,
} from '@/store/actions'

export function ProductTable() {
    useProducts()
    const dispatch = useDispatch()

    const products = useSelector(selectProducts)
    const isLoading = useSelector(selectProductLoading)
    const editedProduct = useSelector(selectEditedProduct)

    const onStartEdit = (product) => dispatch(startEdit(product))

    const onCancelEdit = () => dispatch(cancelEdit())

    const onSaveEdit = async () => {
        await dispatch(saveEdit(editedProduct))
    }
    const deleteProduct = async (id) => {
        await dispatch(deleteProductById(id))
    }

    if (isLoading) {
        return (
            <div className="mx-auto">
                <Loader />
            </div>
        )
    }

    return (
        <div className="w-5/7 rounded-md border border-gray-300 px-2 py-2">
            <table className="table-fixed border text-xs">
                <caption className="mb-2 caption-top">
                    Список всех доступных товаров
                </caption>
                <thead>
                    <tr>
                        <th className="w-4 border border-gray-300 px-1">ID</th>
                        <th className="w-40 border border-gray-300 px-1">
                            Наименование
                        </th>
                        <th className="w-50 border border-gray-300 px-1">
                            Описание
                        </th>
                        <th className="border border-gray-300 px-2">Цена</th>
                        <th className="border border-gray-300 px-1">Кол-во</th>
                        <th className="border border-gray-300 px-2">
                            Категория
                        </th>
                        <th className="w-40 border border-gray-300 px-1">
                            Фото
                        </th>
                        <th className="border border-gray-300 px-1">Создан</th>
                        <th className="border border-gray-300 px-1">
                            Действия
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <ProductRow
                            key={product._id}
                            product={product}
                            startEdit={onStartEdit}
                            cancelEdit={onCancelEdit}
                            saveEdit={onSaveEdit}
                            deleteProduct={() => deleteProduct(product._id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    )
}
