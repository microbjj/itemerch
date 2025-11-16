export const ROLE = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    GUEST: 'GUEST',
}

export const RoleLabels = {
    [ROLE.ADMIN]: 'Админ',
    [ROLE.USER]: 'Пользователь',
    [ROLE.GUEST]: 'Гость',
}

export const ReverseRoleLabels = {
    Админ: ROLE.ADMIN,
    Пользователь: ROLE.USER,
    Гость: ROLE.GUEST,
}
