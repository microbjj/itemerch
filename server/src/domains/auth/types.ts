export interface UserBody {
    username: string
    password: string
    profile?: {
        avatar?: {
            name: string
            path: string
        }
        firstName?: string
        email?: string
        phone?: string
    }
}
