export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST",
}

export const RoleLabels = {
    [Role.ADMIN]: "Админ",
    [Role.USER]: "Пользователь",
    [Role.GUEST]: "Гость",
} as const
