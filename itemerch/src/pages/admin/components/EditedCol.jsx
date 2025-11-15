import { setEditedField } from '@/store/actions'
import { selectEditedProduct } from '@/store/selectors'
import { useDispatch, useSelector } from 'react-redux'

export const EditedCol = ({ isEditing, product, field }) => {
    const dispatch = useDispatch()
    const editedProduct = useSelector(selectEditedProduct)
    const handleChange = (e) => {
        dispatch(setEditedField(field, e.target.value))
    }

    return isEditing ? (
        <input
            className="h-6 w-full py-1 text-center text-xs"
            value={editedProduct[field]}
            onChange={handleChange}
        />
    ) : (
        <span>{product[field]}</span>
    )
}
