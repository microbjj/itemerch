import { body } from "express-validator"

export const registerValidation = [
    body("username").isString().isLength({ min: 3 }).withMessage("Имя пользователя должно быть не менее 3 символов"),
    body("password").isString().isLength({ min: 6 }).withMessage("Пароль должен быть не менее 6 символов"),
]

export const passwordUpdateValidation = [
    body("newPassword").isString().isLength({ min: 6 }).withMessage("Пароль должен быть не менее 6 символов"),
]
