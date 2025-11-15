import { Role } from "@/utils"

export interface UserDto {
    username: string
    role: Role
    profile: {
        avatar: {
            name: string
            path: string
        }
        firstName: string
        email: string
        phone: string
    }
    favorites: string[]
    createdAt: string
    updatedAt: string
}
