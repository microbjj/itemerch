import { AuthPayload, Role, verifyToken } from "@/utils"
import { NextFunction, Request, Response } from "express"
import { getUserByUsername, IUser } from "@/db"

export async function onlyAdmin(req: Request, res: Response, next: NextFunction) {
    const token: string | undefined = req.cookies.token
    if (!token) {
        return res.status(403).json({ message: "Доступ запрещен: отсутствует токен" })
    }

    try {
        const payload: AuthPayload = verifyToken(token)
        const user: IUser | null = await getUserByUsername(payload.username)

        const isAdmin = user?.role === Role.ADMIN
        if (!isAdmin) {
            return res.status(403).json({ message: "Доступ запрещен: недостаточно прав" })
        }

        next()
    } catch (error) {
        return res.status(403).json({ message: "Недействительный токен" })
    }
}
