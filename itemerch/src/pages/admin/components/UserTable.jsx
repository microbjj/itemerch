import { useUsers } from '@/pages/admin/hooks/useUsers'
import { UserItem } from '@/pages/admin/components'
import { Loader } from '@/components'

export function UserTable() {
    const {
        users,
        isLoading,
        username,
        onCancelEdit,
        deleteUser,
        onStartEdit,
        onSaveEdit,
        handleOnChange,
    } = useUsers()

    if (isLoading) {
        return (
            <div className="mx-auto">
                <Loader />
            </div>
        )
    }

    return (
        <div className="w-5/7 rounded-md border border-gray-300 px-2 py-2">
            <div className="flex gap-x-2 text-sm font-semibold">
                <span className="min-w-50 text-center">Имя пользователя</span>
                <span className="min-w-40 text-center">Роль</span>
                <span className="min-w-35 text-center">Создан</span>
                <span className="min-w-35 text-center">Обновлен</span>
                <span className="min-w-50 text-center">Действия</span>
            </div>
            {users.map((user) => (
                <UserItem
                    key={user.username}
                    user={user}
                    startEdit={onStartEdit}
                    cancelEdit={onCancelEdit}
                    saveEdit={onSaveEdit}
                    username={username}
                    handleOnChange={handleOnChange}
                    deleteUser={() => deleteUser(user.username)}
                />
            ))}
        </div>
    )
}
