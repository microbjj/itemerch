import bcrypt from "bcrypt"
import { Request, Response } from "express"
import { validationResult } from "express-validator"
import { getUserByUsername, IUser, UserModel } from "@/db/users"
import { toUserDto } from "@/domains/auth/user.dto"
import { AuthPayload, getToken, verifyToken } from "@/utils"
import { HTTP_STATUS } from "@/utils/status.codes"
import { UserBody } from "@/domains/auth/types"

export async function register(req: Request<{}, {}, UserBody>, res: Response) {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json(errors.array())
        }

        const { username, password, info } = req.body
        const passwordHash = await bcrypt.hash(password, 10)

        const doc = new UserModel({
            username,
            passwordHash,
            ...info,
        })

        const user: IUser = await doc.save()
        const token: string = getToken(user.username.toString())

        res.status(HTTP_STATUS.CREATED)
            .cookie("token", token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60,
            })
            .json(toUserDto(user))
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({
            error,
            message: "Не удалось зарегистрироваться",
        })
    }
}

export async function login(req: Request<{}, {}, UserBody>, res: Response) {
    try {
        const { username, password } = req.body

        const user: IUser | null = await UserModel.findOne({
            username,
        })

        if (!user) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Неверное имя пользователя или пароль." })
        }

        const isValidPassword = await bcrypt.compare(password, user.passwordHash)

        if (!isValidPassword) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Неверное имя пользователя или пароль." })
        }

        const token: string = getToken(user.username.toString())

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60,
        }).json(toUserDto(user))
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({
            error,
            message: "Не удалось авторизоваться",
        })
    }
}

export async function logout(_: Request, res: Response) {
    res.clearCookie("token", {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
    })

    res.status(HTTP_STATUS.NO_CONTENT).end()
}

export async function restoreSession(req: Request, res: Response) {
    try {
        const token: string | undefined = req.cookies.token
        if (!token) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Нет токена" })
        }

        const payload: AuthPayload = verifyToken(token)
        const user: IUser | null = await getUserByUsername(payload.username)
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND)
        }
        res.json(toUserDto(user))
    } catch (error) {
        res.status(HTTP_STATUS.SERVER_ERROR).json({
            error,
            message: "Не удалось авторизоваться",
        })
    }
}
