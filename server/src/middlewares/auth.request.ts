import { AuthPayload, verifyToken } from "@/utils"
import { NextFunction, Request, Response } from "express"
import { getUserByUsername, IUser } from "@/db"
import { merge } from "lodash"
import { toUserDto } from "@/domains/auth/user.dto"

export async function authRequest(req: Request, res: Response, next: NextFunction) {
    const token: string | undefined = req.cookies.token
    if (!token) {
        return res.status(403).json({ message: "Доступ запрещен: отсутствует токен" })
    }
    try {
        const payload: AuthPayload = verifyToken(token)
        const user: IUser | null = await getUserByUsername(payload.username)

        if (!user) {
            return res.status(401).json({ message: "Пользователь не найден" })
        }

        merge(req, { user: toUserDto(user) })

        next()
    } catch (error) {
        return res.status(403).json({ message: "Недействительный токен" })
    }
}
