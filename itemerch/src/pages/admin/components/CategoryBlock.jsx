import { categoryList } from '@/utils/constants'
import { setEditedField } from '@/store/actions'
import { selectEditedProduct } from '@/store/selectors'
import { useDispatch, useSelector } from 'react-redux'

export const CategoryBlock = ({ product, isEditing }) => {
    const dispatch = useDispatch()
    const editedProduct = useSelector(selectEditedProduct)
    const handleChange = (e) => {
        dispatch(setEditedField('categoryId', e.target.value))
    }

    const category = categoryList.find(
        (cat) => cat.value === product.categoryId,
    )?.title

    return isEditing ? (
        <select
            value={editedProduct.categoryId}
            onChange={handleChange}
            className="w-28 text-center text-xs text-wrap"
        >
            {categoryList.map(({ value, title }) => (
                <option key={value} value={value}>
                    {title}
                </option>
            ))}
        </select>
    ) : (
        <span>{category}</span>
    )
}
