import { Router } from "express"
import { registerValidation } from "@/middlewares/auth.validatation"
import { login, logout, register, restoreSession } from "@/domains/auth/auth.controllers"
import { authRequest } from "@/middlewares"

const router = Router()

router.post("/register", registerValidation, register)
router.post("/login", login)
router.post("/logout", authRequest, logout)
router.get("/session", restoreSession)

export default router
