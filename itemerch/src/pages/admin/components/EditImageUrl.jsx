import { setEditedField } from '@/store/actions'
import { selectEditedProduct } from '@/store/selectors'
import { useDispatch, useSelector } from 'react-redux'

export function EditImageUrl({ isOpen, onClose, saveEdit }) {
    if (!isOpen) return null

    const dispatch = useDispatch()
    const editedProduct = useSelector(selectEditedProduct)
    const handleChange = (e, i) => {
        const updatedUrls = [...editedProduct.imageUrl]
        updatedUrls[i] = e.target.value
        dispatch(setEditedField('imageUrl', updatedUrls))
    }

    const SaveImage = () => {
        saveEdit()
        onClose()
    }

    const Back = () => {
        onClose()
    }

    return (
        <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex w-2xl flex-col gap-y-2 rounded bg-white p-6 shadow-lg">
                <div className="">{editedProduct.name}</div>
                <div className="">Артикул: {editedProduct.id}</div>
                <div className="flex flex-col gap-y-2">
                    {editedProduct.imageUrl.map((url, i) => (
                        <div key={i} className="flex items-center gap-x-2">
                            <img src={url} alt="" className="h-10 w-10" />
                            <input
                                onChange={(e) => handleChange(e, i)}
                                className="w-full rounded-md border px-2 py-1"
                                value={editedProduct.imageUrl[i]}
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={SaveImage}
                    className="hover:bg-dark mt-2 w-full rounded bg-black px-4 py-2 text-white"
                >
                    Сохранить
                </button>
                <button
                    onClick={Back}
                    className="hover:bg-dark w-full rounded bg-black px-4 py-2 text-white"
                >
                    Назад
                </button>
            </div>
        </div>
    )
}
