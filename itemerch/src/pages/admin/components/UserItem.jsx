import { Button } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { selectEditedProduct } from '@/store/selectors'
import { setEditedField } from '@/store/actions'
import { RoleLabels } from '@/utils/constants'
import { useState } from 'react'

export function UserItem({
    user,
    username,
    startEdit,
    saveEdit,
    cancelEdit,
    handleOnChange,
    deleteUser,
}) {
    const [selectedRole, setSelectedRole] = useState(user.role)
    const isEditing = user.username === username

    const onRoleChange = ({ target }) => {
        setSelectedRole(target.value)
        handleOnChange(target.value)
    }

    return (
        <div className="flex w-full items-center gap-x-2 py-1 text-sm">
            <span className="min-w-50 pl-8">{user.username}</span>
            {isEditing ? (
                <select
                    onChange={onRoleChange}
                    className="min-w-40 rounded-md border px-1 py-1"
                    value={selectedRole}
                >
                    {Object.entries(RoleLabels).map(([role, description]) => (
                        <option key={role} value={description}>
                            {description}
                        </option>
                    ))}
                </select>
            ) : (
                <span className="min-w-40 text-center">
                    {RoleLabels[user.role]}
                </span>
            )}
            <span className="min-w-35 text-center">
                {new Date(user.createdAt).toLocaleDateString('ru-RU')}
            </span>
            <span className="min-w-35 text-center">
                {new Date(user.updatedAt).toLocaleDateString('ru-RU')}
            </span>

            {isEditing ? (
                <div className="flex min-w-50 justify-center gap-x-2">
                    <Button
                        title="Save"
                        onClick={() => saveEdit()}
                        className="h-8 max-w-14 text-sm"
                    />
                    <Button
                        title="Cancel"
                        onClick={() => cancelEdit()}
                        className="h-8 max-w-18 text-sm"
                    />
                </div>
            ) : (
                <div className="flex min-w-50 justify-center gap-x-2">
                    <Button
                        title="Edit"
                        onClick={() => startEdit(user)}
                        className="h-8 max-w-14 text-sm"
                    />
                    <Button
                        title="Delete"
                        onClick={() => deleteUser(user.username)}
                        className="h-8 max-w-18 text-sm"
                    />
                </div>
            )}
        </div>
    )
}

export const EditedField = ({ isEditing, product, field }) => {
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
