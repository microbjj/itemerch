export interface UserBody {
    username: string
    password: string
    info?: {
        avatar?: {
            name: string
            path: string
        }
        firstName?: string
        email?: string
        phone?: string
    }
}
