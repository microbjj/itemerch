import { IUser } from "@/db/users"
import { UserDto } from "@/db/types"

export function toUserDto(user: IUser): UserDto {
    return {
        username: user.username,
        role: user.role,
        profile: user.profile,
        favorites: user.favorites,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
    }
}
