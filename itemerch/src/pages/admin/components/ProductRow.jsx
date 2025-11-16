import { useSelector } from 'react-redux'
import { EditedCol } from './EditedCol'
import { ImageBlock } from './ImageBlock'
import { CategoryBlock } from './CategoryBlock'
import { selectEditingId } from '@/store/selectors'
import { EditAndDelete, SaveAndCancel } from './ControlsBlock'

export const ProductRow = ({
    product,
    startEdit,
    cancelEdit,
    saveEdit,
    deleteProduct,
}) => {
    const editingId = useSelector(selectEditingId)
    const isEditing = editingId === product._id
    return (
        <tr>
            <td className="max-w-18 border border-gray-300 px-1 text-center text-[8px] break-words">
                {product._id}
            </td>
            <td className="border border-gray-300 px-1 text-left">
                <EditedCol
                    isEditing={isEditing}
                    product={product}
                    field="name"
                />
            </td>
            <td className="border border-gray-300 px-1 text-left">
                <EditedCol
                    isEditing={isEditing}
                    product={product}
                    field="description"
                />
            </td>
            <td className="border border-gray-300 text-center">
                <EditedCol
                    isEditing={isEditing}
                    product={product}
                    field="price"
                />
            </td>
            <td className="border border-gray-300 text-center">
                <EditedCol
                    isEditing={isEditing}
                    product={product}
                    field="stock"
                />
            </td>
            <td className="border border-gray-300 px-2 text-center">
                <CategoryBlock product={product} isEditing={isEditing} />
            </td>
            <td className="border border-gray-300">
                <ImageBlock
                    product={product}
                    isEditing={isEditing}
                    saveEdit={saveEdit}
                    cancelEdit={cancelEdit}
                />
            </td>
            <td className="border border-gray-300 px-2 text-center">
                {new Date(product.createdAt).toLocaleDateString('ru-RU')}
            </td>
            <td className="border border-gray-300">
                {isEditing ? (
                    <SaveAndCancel
                        saveEdit={saveEdit}
                        cancelEdit={cancelEdit}
                    />
                ) : (
                    <EditAndDelete
                        startEdit={startEdit}
                        deleteProduct={deleteProduct}
                        product={product}
                    />
                )}
            </td>
        </tr>
    )
}
