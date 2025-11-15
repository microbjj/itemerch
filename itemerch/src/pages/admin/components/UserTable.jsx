import { useUsers } from '@/pages/admin/hooks/useUsers'
import { ROLE as Role } from '@/utils/constants'
import { Button } from '@/components'

export const RoleLabels = {
    [Role.ADMIN]: 'Админ',
    [Role.USER]: 'Пользователь',
    [Role.GUEST]: 'Гость',
}

export function UserTable() {
    const { users, isLoading } = useUsers()

    if (isLoading) {
        return <div>Loading users..</div>
    }
    return (
        <div className="w-5/7 rounded-md border border-gray-300 px-2 py-2">
            <div className="flex gap-x-2 text-sm font-semibold">
                <span className="min-w-50">Имя пользователя</span>
                <span className="min-w-30 text-center">Роль</span>
                <span className="min-w-35 text-center">Создан</span>
                <span className="min-w-35 text-center">Обновлен</span>
                <span className="min-w-50 text-center">Действия</span>
            </div>
            {users.map((user) => (
                <UserItem key={user.username} user={user} />
            ))}
        </div>
    )
}

const UserItem = ({ user }) => {
    return (
        <div className="flex w-full items-center gap-x-2 py-1 text-sm">
            <span className="min-w-50">{user.username}</span>
            <span className="min-w-30 text-center">
                {RoleLabels[user.role]}
            </span>
            <span className="min-w-35 text-center">
                {new Date(user.createdAt).toLocaleDateString('ru-RU')}
            </span>
            <span className="min-w-35 text-center">
                {new Date(user.updatedAt).toLocaleDateString('ru-RU')}
            </span>
            <div className="flex min-w-50 justify-center gap-x-4">
                <Button
                    title="Ред"
                    onClick={() => {
                        console.log(user)
                    }}
                    className="h-8 max-w-10 text-sm"
                />
                <Button
                    title="Удал"
                    onClick={() => {
                        console.log(user)
                    }}
                    className="h-8 max-w-10 text-sm"
                />
            </div>
        </div>
    )
}
