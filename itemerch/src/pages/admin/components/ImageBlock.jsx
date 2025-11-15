import { useState } from 'react'
import { EditImageUrl } from './EditImageUrl'

export const ImageBlock = ({ product, isEditing, saveEdit, cancelEdit }) => {
    const [isModalOpen, setModalOpen] = useState(false)

    const onOpen = () => setModalOpen(true)
    const onClose = () => setModalOpen(false)

    return (
        <div className="flex h-10 w-40 overflow-hidden hover:overflow-visible">
            {product.imageUrl.map((url, i) => (
                <img
                    onClick={isEditing ? () => onOpen() : undefined}
                    key={i}
                    src={url}
                    alt={product.name}
                    className="h-10 w-10 object-cover object-top hover:scale-220"
                />
            ))}

            {isModalOpen && (
                <EditImageUrl
                    isOpen={isModalOpen}
                    onClose={onClose}
                    saveEdit={saveEdit}
                />
            )}
        </div>
    )
}
