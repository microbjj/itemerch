import clsx from 'clsx'
import { FaRegSave } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import { GrEdit, GrTrash } from 'react-icons/gr'

const ActionButton = ({ onClick, title, children, className, ...props }) => {
    return (
        <button
            {...props}
            onClick={onClick}
            className={clsx('cursor-pointer duration-100', className)}
        >
            {children}
        </button>
    )
}

export const SaveAndCancel = ({ saveEdit, cancelEdit }) => {
    return (
        <div className="flex items-center justify-center gap-x-4">
            <ActionButton
                title="Edit"
                className="hover:text-fuchsia-800"
                onClick={saveEdit}
            >
                <FaRegSave size="18px" />
            </ActionButton>
            <ActionButton
                title="Edit"
                className="hover:text-red-600"
                onClick={cancelEdit}
            >
                <MdOutlineCancel size="18px" />
            </ActionButton>
        </div>
    )
}

export const EditAndDelete = ({ startEdit, deleteProduct, product }) => {
    return (
        <div className="flex items-center justify-center gap-x-4">
            <ActionButton
                title="Edit"
                className="hover:text-fuchsia-800"
                onClick={() => startEdit(product)}
            >
                <GrEdit size="18px" />
            </ActionButton>
            <ActionButton
                title="Delete"
                className="hover:text-red-600"
                onClick={() => deleteProduct(product.id)}
            >
                <GrTrash size="18px" />
            </ActionButton>
        </div>
    )
}
