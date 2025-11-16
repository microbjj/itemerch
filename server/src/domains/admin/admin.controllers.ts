import { Request, Response } from "express"
import { deleteUserByUsername, fetchAllUsers, getUserByUsername, IUser, updateUserData } from "@/db"
import { toUserDto } from "@/domains/auth/user.dto"
import { HTTP_STATUS } from "@/utils/status.codes"
import { UserDto } from "@/db/types"

export async function getAllUsers(_: Request, res: Response) {
    try {
        const users: IUser[] = await fetchAllUsers()
        res.status(HTTP_STATUS.OK).json(users.map(toUserDto))
    } catch (error) {
        console.log(error)
        return res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function getUser(req: Request, res: Response) {
    try {
        const username: string = req.params.username

        if (!username) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        const user: IUser | null = await getUserByUsername(username)
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Пользователя не существует" })
        }

        res.status(HTTP_STATUS.OK).json(toUserDto(user))
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function editUser(req: Request, res: Response) {
    try {
        const username: string = req.params.username
        const data: Partial<UserDto> = req.body
        if (!username) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        const user: IUser | null = await getUserByUsername(username)
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Пользователя не существует" })
        }

        const update: IUser | null = await updateUserData(toUserDto(user), data)
        if (!update) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }

        res.status(HTTP_STATUS.OK).json(toUserDto(update))
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}

export async function deleteUser(req: Request, res: Response) {
    try {
        const username: string = req.params.username
        if (!username) {
            return res.status(HTTP_STATUS.BAD_REQUEST).json({ message: "Ошибка запроса" })
        }
        const user: IUser | null = await getUserByUsername(username)
        if (!user) {
            return res.status(HTTP_STATUS.NOT_FOUND).json({ message: "Пользователя не существует" })
        }

        await deleteUserByUsername(username)
        res.status(HTTP_STATUS.NO_CONTENT).end()
    } catch (error) {
        console.error(error)
        res.status(HTTP_STATUS.SERVER_ERROR).json({ message: "Серверная ошибка" })
    }
}
