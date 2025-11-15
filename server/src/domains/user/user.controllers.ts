import bcrypt from "bcrypt"
import { get } from "lodash"
import { UserDto } from "@/db/types"
import { IProduct } from "@/db/products"
import { toUserDto } from "@/domains/auth/user.dto"
import { validationResult } from "express-validator"
import { Request, Response } from "express"
import {
    IUser,
    updateUserPassword,
    updateUserData,
    updateFavorites,
    fetchFavoritesProducts,
    getUserByUsername,
} from "@/db"
import { HTTP_STATUS } from "@/utils/status.codes"

export async function profile(req: Request, res: Response) {
    try {
        const user: UserDto | undefined = get(req, "user")
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Пользователь не найден" })
        }
        res.status(HTTP_STATUS.OK).json({
            user,
        })
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function updateUser(req: Request, res: Response) {
    try {
        const data: Partial<UserDto> = req.body
        const user: UserDto | undefined = get(req, "user")

        if (!user) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        const update: IUser | null = await updateUserData(user, data)
        if (!update) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        res.status(HTTP_STATUS.OK).json(toUserDto(update))
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function updatePassword(req: Request, res: Response) {
    try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json(errors.array())
        }

        const { currentPassword, newPassword } = req.body

        const user = get(req, "user") as UserDto | undefined
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Пользователь не определён" })
        }

        const AuthenticatedUser: IUser | null = await getUserByUsername(user.username)
        if (!AuthenticatedUser) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Пользователь не найден" })
        }

        const isValidCurrentPassword = await bcrypt.compare(currentPassword, AuthenticatedUser.passwordHash)
        if (!isValidCurrentPassword) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: "Неверный текущий пароль." })
        }

        const newPasswordHash = await bcrypt.hash(newPassword, 10)
        const update = await updateUserPassword(user, newPasswordHash)
        if (!update) {
            res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Не удалось обновить пароль" })
        }

        res.status(HTTP_STATUS.OK).json({ success: true })
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function setFavorites(req: Request, res: Response) {
    try {
        const productId: string = req.params.id
        if (!productId) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Не указан ID товара" })
        }

        const user: UserDto | undefined = get(req, "user")
        if (!user) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        const favorites = await updateFavorites(user, productId)
        if (favorites) {
            res.status(HTTP_STATUS.NO_CONTENT).end()
        }
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function getFavoritesProducts(req: Request, res: Response) {
    try {
        const user: UserDto | undefined = get(req, "user")
        if (!user) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        const favoritesProducts: IProduct[] = await fetchFavoritesProducts(user)
        res.status(HTTP_STATUS.OK).json(favoritesProducts)
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}
